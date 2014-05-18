'use strict';


var IndexModel = require('../models/index');



module.exports = function (router) {

   var indexmodel = new IndexModel();


   router.get('/', function (req, res) {
      res.render('index', indexmodel);
   });



   /**
    * Allow the users to log out
    */
   router.get('/logout', function (req, res) {
      req.logout();
      res.redirect('/login');
   });

};
