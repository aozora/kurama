/**
 * A model for our user
 */
'use strict';
var mongoose = require('mongoose'),
   bcrypt = require('bcrypt'),
   crypto = require('../lib/crypto'),
   userSchema = require('./schemas/user-schema.js');

var userModel = function () {

   //var userSchema = mongoose.Schema(userSchema);
//   var userSchema = mongoose.Schema({
//      name:       String,
//      login:      { type: String, unique: true },  //Ensure logins are unique.
//      password:   String, //We'll store bCrypt hashed passwords.  Just say no to plaintext!
//      role:       String
//   });


   /**
    * Helper function that hooks into the 'save' method, and replaces plaintext passwords with a hashed version.
    */
   userSchema.pre('save', function (next) {
      var user = this;

      //If the password has not been modified in this save operation, leave it alone (So we don't double hash it)
      if (!user.isModified('password')) {
         next();
         return;
      }
      //Encrypt it using bCrypt. Using the Sync method instead of Async to keep the code simple.
      var hashedPwd = bcrypt.hashSync(user.password, crypto.getCryptLevel());

      //Replace the plaintext pw with the Hash+Salted pw;
      user.password = hashedPwd;

      //Continue with the save operation
      next();
   });


   /**
    * Helper function that takes a plaintext password and compares it against the user's hashed password.
    * @param plainText
    * @returns true/false
    */
   userSchema.methods.passwordMatches = function (plainText) {
      var user = this;
      return bcrypt.compareSync(plainText, user.password);
   };


   return mongoose.model('User', userSchema);
};

module.exports = new userModel();
