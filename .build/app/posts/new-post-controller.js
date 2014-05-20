/**
 * postsController
 */
App.controller('newPostController', ['$scope', '$location', '$sce', function ($scope, $location, $sce) {
   'use strict';

   // fake post object
   var post = {
      title: '',
      content: '',
      tags: []
   };

   $scope.post = post;



}
]);