'use strict';

var User = require('../models/user');
var uuid = require('node-uuid');

var UserLibrary = function() {
   return {

      addUsers: function() {

         //add two users
         var u1 = new User({
            uuid: uuid.v1(),
            name: 'Kraken McSquid',
            slug: 'kraken',
            email: 'kraken@mckraken',
            password: 'kraken',
            status: 'active',
            role: 'admin'
         });

//         var u2 = new User({
//            name: 'Ash Williams',
//            email: 'ash',
//            password: 'ash',
//            status: 'active',
//            role: 'user'
//         });

         //Ignore errors. In this case, the errors will be for duplicate keys as we run this app more than once.
         u1.save();
//         u2.save();
      },

      serialize: function(user, done) {
         done(null, user.id);
      },

      deserialize: function(id, done) {
         User.findOne({
            _id: id
         }, function(err, user) {
            done(null, user);
         });
      }

   };
};

module.exports = UserLibrary;
