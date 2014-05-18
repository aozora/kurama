var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
   name:       String,
   login:      { type: String, unique: true },  //Ensure logins are unique.
   password:   String, //We'll store bCrypt hashed passwords.  Just say no to plaintext!
   role:       String
});


module.exports = userSchema;