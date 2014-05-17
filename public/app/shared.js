/**
 * Shared Module
 * ==============================
 */
var appShared = angular.module('app-shared', ['ngResource', 'ngRoute', 'pascalprecht.translate']);


/**
 * Shared Filters
 * ==============================
 */
angular.module('app-filters', [])

   /**
    * UTC Filter
    *  Example: {{runningDuration | utc | date:'HH:mm:ss'}}
   */
   .filter('utc', [function() {
      return function(date) {
         if (angular.isNumber(date)) {
            date = new Date(date);
         }
         return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
      };
   } ])


   /**
    * IsEmpty Filter
    */
   .filter('isempty', function () {
      return function (input, replaceText) {
         if (input) return input;
         return replaceText;
      };
   })

   /**
    * Truncate Filter
    */
   .filter('truncate', function () {
      return function (text, length, end) {
         if (isNaN(length))
            length = 10;

         if (end === undefined)
            end = "...";

         if (text.length <= length || text.length - end.length <= length) {
            return text;
         }
         else {
            return String(text).substring(0, length - end.length) + end;
         }

      };
   });
