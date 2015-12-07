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

router.post('/search', function(req, res) {
    var firstName = (req.body.firstName);
    var lastName = (req.body.lastName);
    var desiredLoc = (req.body.desiredLoc);
    var skills = (req.body.skills);

    var results = mongo.applications.find({$or: [ {"firstName": firstName}, {"lastName": lastName},
        {"desiredLoc": desiredLoc}, {"skills": skills}] })
        .toArray(function(err, array) {

        res.render('admin.jade', {data: array});

    });


})


module.exports = router;
