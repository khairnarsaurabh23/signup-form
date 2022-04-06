var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


//var db = require('./database');

var rmListRouter = require('./routes/rmList');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var partRouter = require('./routes/partForm.js');
var partPostRouter = require('./routes/partPost');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/', rmListRouter);
app.use('/', usersRouter);
app.use('/', partRouter);
app.use('/', partPostRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8800, function () {
  console.log('Node app is running on port 3000');
})

module.exports = app;
