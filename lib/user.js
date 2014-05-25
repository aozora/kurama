'use strict';

var User = require('../models/user');
var uuid = require('node-uuid');

var UserLibrary = function() {
   return {

      addUsers: function() {

         // TODO: move default user to config
         //add default user
         User.findOne({
            email: 'kraken@mckraken'
         }, function(err, user) {

            if (!user){
               var u1 = new User({
                  uuid: uuid.v1(),
                  name: 'Kraken McSquid',
                  slug: 'kraken',
                  email: 'kraken@mckraken',
                  password: 'kraken',
                  status: 'active',
                  role: 'admin'
               });

               //Ignore errors. In this case, the errors will be for duplicate keys as we run this app more than once.
               u1.save();

            }

         });

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
