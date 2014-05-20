/* Angular Custom CheckBox directive
 *
*/

appShared
   .directive('pen', [function () {
      'use strict';

      return {
         require: 'ngModel', // make available the ngModelController
         restrict: 'A',
//         scope: {
//            css: '@customClass',
//            label: '@',
//            onChange: '&'
//         },
         link: function (scope, element, attrs, ngModelController) {

            var options = {
               editor: element.get(0), // {DOM Element} [required]
               class: 'pen', // {String} class of the editor,
               textarea: '<textarea name="content"></textarea>', // fallback for old browsers
               list: [
                  'blockquote', 'h2', 'h3', 'p', 'insertorderedlist', 'insertunorderedlist',
                  'indent', 'outdent', 'bold', 'italic', 'underline', 'createlink'
               ],
               stay: true,
               debug: false
            };

            var editor = new Pen(options);


//            if (scope.css)
//               element.addClass(scope.css);
//
//            if (scope.label)
//               scope.text = attrs.label;
//
//            // when model change, update our view (just update the div content)
//            ngModelController.$render = function () {
//               scope.isChecked = ngModelController.$viewValue;
//            };
//
//            // update the model then the view
//            function updateModel(value) {
//               scope.isChecked = value;
//
//               // call $parsers pipeline then update $modelValue
//               ngModelController.$setViewValue(value);
//               // update the local view
//               ngModelController.$render();
//            }
//
//            scope.toggleMe = function () {
//               updateModel(!(scope.isChecked));
//
//               if (scope.onChange)
//                  scope.onChange();
//            };
         }
      };
   }]);
