var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db=require('./database');
 
var app = express();
 
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
 
//impoer all routes functions 
const home = require('./routes/index');
const create = require('./routes/create');


app.use('/', home);
app.use('/create', create);
 
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
app.listen(8800, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;