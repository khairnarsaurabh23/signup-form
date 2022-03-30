var express = require('express');
var router = express.Router();

// router.route('/create').post( function(req, res, next) {
//     //typo here because of mysql table was created with that name
//     var rm_cod = req.body.rm_code;
//     var rm_name = req.body.rm_name;
//     var rm_type = req.body.rm_type;
//     var description = req.body.description;
//     var deparment_id = req.body.department_id;
    
//     console.log(`${rm_code}`);

//     var sql = `INSERT INTO rmlist ( rm_code, rm_name, rm_type, description, department_id) VALUES (default, "${rm_cod}", "${rm_name}", "${rm_type}", "${description}", "${deparment_id}")`;
//     db.query(sql, function(err, result) {
//       if (err) throw err;
//       console.log('record inserted');
//       //req.flash('success', 'Data added successfully!');
//       res.redirect('/');
//     });
//   });
 


module.exports = router;
