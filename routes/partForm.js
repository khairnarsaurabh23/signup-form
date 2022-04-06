//route file to render part receipe form

var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
      new winston.transports.Console()
  ]
});


router.route('/part-form').get( function(req, res, next) {
  res.render('partForm', { title: 'create' });
  logger.info('Part form rendered.');
});




module.exports = router;
