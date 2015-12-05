var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render( 'admin.jade');
});

module.exports = router;/**
 * Created by manadab on 12/4/15.
 */
