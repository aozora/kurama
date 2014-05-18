'use strict';


var auth = require('../../lib/auth'),
    AdminModel = require('../../models/admin');


module.exports = function (router) {

    var model = new AdminModel();


    router.get('/', auth.isAuthenticated('admin'), auth.injectUser(), function (req, res) {

       res.render('admin', model);
//        res.format({
//            json: function () {
//                res.json(model);
//            },
//            html: function () {
//                res.render('admin/index', model);
//            }
//        });
    });

};


//router.get('/admin', auth.isAuthenticated('admin'), auth.injectUser(), function(req, res) {
//   res.render('admin', adminmodel);
//});
