'use strict';

appShared
   .factory('Post', ['$resource',
      function ($resource) {
         return $resource('/posts/:id',   // url
            {}, // paramsDefault
            {} // actions
         );
      }]
)
//
//   .factory('Movement', ['$resource',
//      function ($resource) {
//         return $resource('/konto/v1/account/:accountid/transaction/:transactionid',   // url
//            {
//               accountid: '@accountid',
//               transactionid: '@transactionid'
//            }, // paramsDefault
//            {
//               // actions
//               save: { method: 'PUT' }
//            }
//         );
//      }]
//)
;