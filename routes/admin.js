var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render( 'admin.jade');
    console.log('i am here on admin');
});

module.exports = router;

