'use strict';

var Post = require('../models/post');

var PostLibrary = function() {
   return {

      addPost: function(post, done) {

         post.save(function(err, p){
            if (err){
               // TODO: manage coorectly the error throw
               console.trace('PostLibrary');
               console.error(err.stack);
               done(err);
            }

            done(null, p.id);
         });
      }

   };
};

module.exports = UserLibrary;
