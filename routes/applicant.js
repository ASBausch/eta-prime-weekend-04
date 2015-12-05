/**
 * Created by manadab on 12/5/15.
 */
var express = require('express');
var router = express.Router();

/*here I need to send the data to the database*/
router.post('/', function(req, res) {
    console.log('i am here on applicant above db');
    var db = req.db;
    console.log('i am here on applicant above collection');
    var collection = db.get('applications');
    console.log(collection);
    console.log('i am here on applicant above collection.insert');
    collection.insert(req.body, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );

    });
});

module.exports = router;

