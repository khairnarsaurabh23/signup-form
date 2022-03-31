var express = require('express');
const res = require('express/lib/response');
var router = express.Router();


router.route('/home').get( function(req, res, next) {
  res.render('home', { title: 'home' });

});




module.exports = router;
