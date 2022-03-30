var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db=require('./database');

 
//impoer all routes functions 
const home = require('./routes/index');
//const create = require('./routes/create');

 
var app = express();
 
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', home);
//app.use('/', create);
app.use('/create', function(req, res, next) {
  //typo here because of mysql table was created with that name
  var rm_cod = req.body.rm_code;
  var rm_name = req.body.rm_name;
  var rm_type = req.body.rm_type;
  var description = req.body.description;
  var deparment_id = req.body.department_id;
  
  console.log(`${rm_code}`);

  var sql = `INSERT INTO rmlist ( rm_code, rm_name, rm_type, description, department_id) VALUES (default, "${rm_cod}", "${rm_name}", "${rm_type}", "${description}", "${deparment_id}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    //req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});


 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // // set locals, only providing error in development
  //  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
// port must be set to 3000 because incoming http requests are routed from port 80 to port 8080
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;