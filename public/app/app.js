'use strict';

/**
 * App module configuration
 */
var app = {};
var App = angular.module('app', ['ngResource',
                                 'ngSanitize',
                                 'ngRoute',
                                 'ngCookies',
                                 'ngAnimate',
                                 'app-shared',
                                 'app-filters',
                                 'angular-growl',
                                 'pascalprecht.translate',
                                 'pasvaz.bindonce',
                                 'angular-loading-bar'
]);

/**
 * Versioning value for dynamic templates
 */
App.constant('lyteConfig', {
   timestamp: new Date().getTime()
});


App.config(['$httpProvider', 'lyteConfig', function ($httpProvider, lyteConfig) {

   $httpProvider.interceptors.push(['$q', function ($q) {
      return {
         request: function (config) {
            if (config.method === 'GET' && config.url.indexOf('.html') > -1 && config.url.indexOf('Content') > -1) {
               var sep = config.url.indexOf('?') === -1 ? '?' : '&';
               config.url = config.url + sep + 'cacheSlayer=' + lyteConfig.timestamp;
            }
            return config || $q.when(config);
         }
      };

   }]);

}]);



/* *********************************************************************
 Growl configuration
 ********************************************************************* */
App.config(['growlProvider', '$httpProvider', function (growlProvider, $httpProvider) {
   growlProvider.globalTimeToLive(10000);
   growlProvider.messagesKey("messages");
   growlProvider.messageTextKey("message");
   growlProvider.messageSeverityKey("level");

   $httpProvider.responseInterceptors.push(growlProvider.serverMessagesInterceptor);
}]);


/**
 * Translation configuration
 */
//App.config(['$translateProvider', function ($translateProvider) {
//
//   $translateProvider.useLoader('translationsCustomLoader', {});
//
//   $translateProvider.preferredLanguage('it');
//
//}]);
//
//App.factory('translationsCustomLoader', ['$http', '$q', function ($http, $q) {
//   return function(options) {
//      var deferred = $q.defer();
//
//      $http({
//         method: 'GET',
//         responseType: 'json',
//         url: '/Content/Viaggidea/js/i18n/locale-translations-' + options.key + '.json'
//      }).success(function(data) {
//         deferred.resolve(data);
//      }).error(function () {
//
//         if (options.key != 'en') {
//            $http({
//               method: 'GET',
//               responseType: 'json',
//               url: '/Content/Viaggidea/js/i18n/locale-translations-en.json'
//            }).success(function(data) {
//               deferred.resolve(data);
//            }).error(function() {
//               deferred.reject(options.key);
//            });
//         }
//      });
//
//      return deferred.promise;
//   };
//}]);
//
