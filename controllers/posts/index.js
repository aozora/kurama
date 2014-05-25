'use strict';


var PostsModel = require('../../models/posts');
//var postLib = require('../../lib/post')();


   module.exports = function (router) {

    var model = new PostsModel();


    router.get('/', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('posts/index', model);
            }
        });
    });


   router.post('/', function (req, res) {

      res.format({
         json: function () {

            console.dir(req.body);
//            var post = new postsModel({
//               title: req.body.
//            });
//
//            postLib.addUser(post);

            res.json(model);
         }
      });

   });

};
