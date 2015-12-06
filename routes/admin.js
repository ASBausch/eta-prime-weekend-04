var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('admin.jade');
   // var results = mongo.applications.find({'_id': parseInt(req.params.id)}).limit(1);
    //var array = results.toArray(function(err, arr) {
     //   var doc = array[0];
       // res.json(doc);

   // })

});

module.exports = router;
