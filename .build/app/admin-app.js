'use strict';

App.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
      .when('/',           { templateUrl: '/app/dashboard/dashboard-template.html', controller: 'dashboardController' })
      .when('/profile',    { templateUrl: '/app/profile/profile-template.html',   controller: 'profileController' })
      .when('/pages',      { templateUrl: '/app/pages/pages-template.html',     controller: 'pagesController' })
      .when('/posts',      { templateUrl: '/app/posts/posts-template.html',     controller: 'postsController' })
      .when('/posts/new',  { templateUrl: '/app/posts/new-post-template.html',     controller: 'newPostController' })
      .otherwise({ redirectTo: '/' });
}]);



/**
 * topNavbarController
 */
App.controller('topNavbarController', ['$scope', function ($scope) {

   $scope.menu = [
      {
         'text': 'Posts',
         'href': '#/posts'
      },
      {
         'text': 'Pages',
         'href': '#/pages'
      },
      {
         'divider': true
      },
      {
         'text': 'Users',
         'href': '#/users'
      },
      {
         'text': 'Settings',
         'href': '#/settings'
      }
   ];
}
]);