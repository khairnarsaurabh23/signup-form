//route file to render rm list form

var express = require('express');
const res = require('express/lib/response');
var router = express.Router();


router.route('/').get( function(req, res, next) {
  res.render('rmList', { title: 'create' });

});




module.exports = router;
