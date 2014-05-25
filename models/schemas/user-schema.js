'use strict';
var mongoose = require('mongoose');

// User schema compatible with Ghost v0.4.x
var userSchema = mongoose.Schema({
   uuid:       { type: String, required: true },
   name:       { type: String, required: true },
   slug:       String,
   password:   { type: String, required: true }, //We'll store bCrypt hashed passwords.  Just say no to plaintext!
   email:      { type: String, unique: true },  //Ensure logins are unique.
   image:      String,
   cover:      String,
   bio:        String,
   website:    String,
   location:   String,
   accessibility: String,
   status:     String,
   language:   String,
   meta_title: String,
   meta_description: String,
   last_login: Date,
   created_at: Date,
   created_by: mongoose.Schema.Types.ObjectId,
   updated_at: Date,
   updated_by: mongoose.Schema.Types.ObjectId,

   role:       String
});


module.exports = userSchema;

//
//   "id": 1,
//   "uuid": "a4db0379-a2f6-455c-8bc1-4520ce8bc18d",
//   "name": "Marcello",
//   "slug": "marcello",
//   "password": "$2a$10$Hvv0WjB2CAQfkWOXQlLTIe.5ZkqZYe6ZoDgeabzmbkH.PL/Ps8n8i",
//   "email": "marcello.palmitessa@gmail.com",
//   "image": "//www.gravatar.com/avatar/6cc5a644d49a9bfe88bc0819ae7bdea6?d=404",
//   "cover": null,
//   "bio": "Largo al factotum della città. Presto a bottega che l'alba è già. Ah, che bel vivere, che bel piacere per un barbiere di qualità! di qualità!",
//   "website": "http://www.marcellop.com",
//   "location": "Milan, Italy",
//   "accessibility": null,
//   "status": "active",
//   "language": "en_US",
//   "meta_title": null,
//   "meta_description": null,
//   "last_login": null,
//   "created_at": 1389625061645,
//   "created_by": 1,
//   "updated_at": 1397976988954,
//   "updated_by": 1