var express = require('express');
var router = express.Router();

router.route('/create').post( function(req, res, next) {
    var f_name = req.body.f_name;
    var l_name = req.body.l_name;
    var email = req.body.email;
    var password = req.body.password;
   
    var sql = `INSERT INTO users (f_name, l_name, email, password) VALUES ("${f_name}", "${l_name}", "${email}", "${password}")`;
    db.query(sql, function(err, result) {
      if (err) throw err;
      console.log('record inserted');
      //req.flash('success', 'Data added successfully!');
      res.redirect('/');
    });
  });
 


module.exports = router;
