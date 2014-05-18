'use strict';


var auth = require('../../lib/auth'),
    ProfileModel = require('../../models/profile');


module.exports = function (router) {

    var model = new ProfileModel();


    router.get('/', auth.isAuthenticated('admin'), auth.injectUser(), function (req, res) {
        
        res.render('profile/index', model);
        
    });

};
