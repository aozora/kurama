module.exports = {
   name:       String,
   login:      { type: String, unique: true },  //Ensure logins are unique.
   password:   String, //We'll store bCrypt hashed passwords.  Just say no to plaintext!
   role:       String
};