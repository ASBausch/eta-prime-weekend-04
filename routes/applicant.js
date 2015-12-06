/**
 * Created by manadab on 12/5/15.
 */
var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/*here I need to send the data to the database*/
router.post('/', function(req, res) {
    //these are set in our mongo.js file to make them available
    var collection = mongo.applications;
    //this takes our data from our form and sends it to our database
    collection.insert(req.body, function (err) {
       res.send(
           err === null ? {msg: ''} : {msg: err}
        );
    })
});

module.exports = router;

