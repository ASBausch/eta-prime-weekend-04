/**
 * Created by manadab on 12/5/15.
 */
var mongodb = require('mongodb');
// init function will allow us to reuse db connection
module.exports.init = function(callback) {
    var server = new mongodb.Server('localhost', 27017);
    var db = new mongodb.Db('rando', server);
    db.open(function(error, db) {
        //export the db
        //these exports act like global variables to a degree
        module.exports.db = db;
        module.exports.applications = db.collection('applications');
        callback(error);
    });
};
