/**
 * postsController
 */
App.controller('newPostController', ['$scope', '$location', 'growl', 'editable.configService', function ($scope, $location, growl, editableConfig) {
   'use strict';

   // fake post object
   var post = {
      title: '',
      content: '',
      tags: []
   };

   $scope.post = post;




   $scope.$ngContentEditableError = function (error) { // Handle error conditions...
      if (error.error === editableConfig.ERRORS.HANDLER_NOT_DEFINED) {
         growl.addErrorMessage('<h3>[' + error.error + '] ' + error.data + '</h3>Handler for this file type is not defined. Try dropping images or something...', { ttl: -1 });
//         $('#example-app-modal-title').text('Oops!');
//         $('#example-app-modal-body').html('<h3>[' + error.error + '] ' + error.data + '</h3>Handler for this file type is not defined. Try dropping images or something...');
//         $('#example-app-modal').modal('show');
      }
   };


   $scope.saveAll = function () { // Save any editable region content...

//      growl.addSuccessMessage($translate('481'));

//      EditorStorage.put({
//         content: content,
//         index: index
//      });
   };

//   $scope.addEditableItem = function () { // Dynamically add new editable regions...
//      $scope.content = $scope.content || [];
//      $scope.content.push({
//         content: EditorStorage._new()
//      });
//   };

}
]);




appShared.directive('editable', function () { // Add additional behavior to show / hide custom toolbar for editables.

   /* NOTE:
    *
    * Since ngContentEditable encourages you to define your own user interface,
    * it's up to you how, when and where you provide for user interaction.
    *
    * Editable regions are defined by simply associating a class name with any
    * elements you want to make editable, within your view. For example:
    *
    *
    * <div class="editable" data-ng-model="your.data.model">Some default static content...</div>
    *
    *
    * If your model data is not available, ngContentEditable will default to
    * whatever static content you have contained within your element.
    *
    * As such, you can have editables within ng-repeat blocks etc.
    *
    * Here, we create our own directive to effectively "add" behavior to existing
    * editable regions, when the user interacts, to determine when to show or hide
    * our custom toolbar for this demo application.
    *
    */

   var _showFirstTimeHint = true,
      $toolbar = $('#editable-toolbar');

   return {
      restrict: 'C',
      link: function(scope, element, attrs) {

         $(element).hide().fadeIn();

         element.bind('focus mousedown keypress', function (event) {
            _hasFocus = true;
            _mouseLeave = false;
            $toolbar.removeClass("hide").fadeIn();

            if (_showFirstTimeHint) { // Draw attention to toolbar on first interaction with editable region.
               _showFirstTimeHint = false;
               $toolbar.popover({
                  animation: true,
                  placement: 'bottom',
                  title: '<i class="fa fa-info"></i> &nbsp; <b>Custom toolbar</b>',
                  content: '<p><b>Hey!</b> Use me to update your text selections.</p><p>This is an example of a custom toolbar interface, making use of editable-command directive for command buttons (above).</p>',
                  html: true,
                  trigger: 'manual',
                  container: 'body' // This is important or else we pollute the editable region content!
               }).popover('show');
               setTimeout(function () { $toolbar.popover('destroy'); }, 5000);
            }

         });
         element.bind('blur', function (event) {
            _hasFocus = true;
            _mouseLeave = false;
            $toolbar.fadeOut();
         });
      }
   };

});