/**
 * Created by manadab on 12/5/15.
 */
var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/*here I need to send the data to the database*/
router.post('/', function(req, res) {

    var collection = mongo.getCollection('applications');
    console.log(collection);

    //collection.insert(req.body, function (err) {
    //    res.send(
    //    err === null ? {msg: ''} : {msg: err}
    //);

    //})
});

module.exports = router;

