'use strict';

var Post = require('../models/post');

var PostLibrary = function() {
   return {

      addPost: function(post, done) {

         post.save(function(err, p){
            if (err){
               console.trace('PostLibrary');
            }

            done(null, p.id);
         });
      }

   };
};

module.exports = UserLibrary;
