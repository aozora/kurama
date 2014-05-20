'use strict';

var mongoose = require('mongoose'),
    postSchema = require('./schemas/post-schema.js');

var postModel = function () {


   return mongoose.model('Post', postSchema);
};

module.exports = new postModel();
