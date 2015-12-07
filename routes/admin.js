var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET home page. */
router.get('/', function(req, res) {
    //pull the data from the database
    var results = mongo.applications.find().limit(5).toArray(function(err, array) {

      res.render('admin.jade', {data: array});

    });






});


module.exports = router;
