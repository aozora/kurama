'use strict';

App.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
      .when('/',           { templateUrl: '/app/dashboard/dashboard-template.html', controller: 'dashboardController' })
      .when('/profile',    { templateUrl: '/app/profile/profile-template.html',   controller: 'profileController' })
      .when('/pages',      { templateUrl: '/app/pages/pages-template.html',     controller: 'pagesController' })
      .when('/posts',      { templateUrl: '/app/posts/posts-template.html',     controller: 'postsController' })
      .otherwise({ redirectTo: '/' });
}]);