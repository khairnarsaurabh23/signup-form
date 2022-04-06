//route file to handle post req by parts  form

var express = require('express');
var router = express.Router();
var db = require('./../database');


router.route('/parts').post( function(req, res, next) {
    var part_no = req.body.part_no;
    var rm_code = req.body.rm_code;
    var qty = req.body.qty;
    var UoM = req.body.UoM;
    var machine_id = req.body.machine_id;
    var updated_userid = req.body.updated_userid
    

    var sql = `INSERT INTO partno_receipe ( part_no, rm_code, qty, UoM, machine_id, updated_userid) VALUES ("default" "${part_no}", "${rm_code}", "${qty}", "${UoM}", "${machine_id}", "${updated_userid}")`;
    db.query(sql, function(err, result) {
      if (err) throw err;
      console.log('record inserted');
      //req.flash('success', 'Data added successfully!');
      res.redirect('/home');
    });
  });


module.exports = router;