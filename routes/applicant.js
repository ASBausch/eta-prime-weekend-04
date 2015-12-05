/**
 * Created by manadab on 12/5/15.
 */
var express = require('express');
var router = express.Router();

/*here I need to send the data to the database and render it in the right template*/
router.get('/applicant', function(req, res) {
    res.render( 'admin.jade');
    console.log('I am here');
});

module.exports = router;
