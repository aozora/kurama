(function () {

   var wcOverlayDirective = function ($q, $timeout, $window, httpInterceptor) {
         return {
            restrict: 'EA',
            transclude: true,
            scope: {
               wcOverlayDelay: "@loaderDelay",
               loaderText: "@loaderText"
            },
            template: '<div id="ui-loader" class="ui-loader ui-page-loader ng-spinner" data-ng-transclude></div>',
            link: function(scope, element, attrs) {
               var overlayContainer = null,
                  timerPromise = null,
                  timerPromiseHide = null,
                  inSession = false,
                  defaultText = 'Attendi...',
                  queue = [];

               init();

               function init() {
                  wireUpHttpInterceptor();

                  if (window.jQuery)
                     wirejQueryInterceptor();

                  overlayContainer = document.getElementById('ui-loader');
                  overlayContainer.style.display = 'none';

                  scope.loaderText = scope.loaderText || defaultText;
               }

               //Hook into httpInterceptor factory request/response/responseError functions
               function wireUpHttpInterceptor() {

                  httpInterceptor.request = function(config) {

                     if (config != null && config.loaderText) {
                        scope.loaderText = config.loaderText;
                     } else {
                        scope.loaderText = defaultText;
                     }

                     processRequest(config);
                     return config || $q.when(config);
                  };

                  httpInterceptor.response = function(response) {
                     processResponse();
                     return response || $q.when(response);
                  };

                  httpInterceptor.responseError = function(rejection) {
                     processResponse();
                     return rejection || $q.when(rejection);
                  };
               }

               //Monitor jQuery Ajax calls in case it's used in an app
               function wirejQueryInterceptor() {
                  $(document).ajaxStart(function() {
                     scope.loaderText = defaultText;
                     processRequest(null);
                  });

                  $(document).ajaxComplete(function() {
                     processResponse();
                  });

                  $(document).ajaxError(function() {
                     processResponse();
                  });
               }

               function processRequest(config) {
                  queue.push({});
                  if (queue.length == 1) {
                     timerPromise = $timeout(function() {
                        if (queue.length) {
                           if (config && config.skipLoader && config.skipLoader == true) {
                           } else {
                              showOverlay();
                           }
                        }
                     }, scope.wcOverlayDelay ? scope.wcOverlayDelay : 500); //Delay showing for 500 millis to avoid flicker
                  }
               }

               function processResponse() {
                  queue.pop();
                  if (queue.length == 0) {
                     //Since we don't know if another XHR request will be made, pause before
                     //hiding the overlay. If another XHR request comes in then the overlay
                     //will stay visible which prevents a flicker
                     timerPromiseHide = $timeout(function() {
                        //Make sure queue is still 0 since a new XHR request may have come in
                        //while timer was running
                        if (queue.length == 0) {
                           hideOverlay();
                           if (timerPromiseHide) $timeout.cancel(timerPromiseHide);
                        }
                     }, scope.wcOverlayDelay ? scope.wcOverlayDelay : 500);
                  }
               }

               function showOverlay() {
                  $('body').append('<div class="loader-backdrop fade in"></div>');
                  overlayContainer.style.display = 'block';
               }

               function hideOverlay() {
                  if (timerPromise)
                     $timeout.cancel(timerPromise);

                  $('.loader-backdrop').remove();
                  overlayContainer.style.display = 'none';
               }

            }
         };
      },

      httpProvider = function ($httpProvider) {
         $httpProvider.interceptors.push('httpInterceptor');
      },

      httpInterceptor = function () {
         return {};
      };

   //var wcDirectivesApp = angular.module('wc.Directives', []);

   //Empty factory to hook into $httpProvider.interceptors
   //Directive will hookup request, response, and responseError interceptors
   appShared.factory('httpInterceptor', httpInterceptor);

   //Hook httpInterceptor factory into the $httpProvider interceptors so that we can monitor XHR calls
   appShared.config(['$httpProvider', httpProvider]);

   //Directive that uses the httpInterceptor factory above to monitor XHR calls
   //When a call is made it displays an overlay and a content area
   //No attempt has been made at this point to test on older browsers
   appShared.directive('loader', ['$q', '$timeout', '$window', 'httpInterceptor', wcOverlayDirective]);

}());