var express = require('express');
var path = require('path');
var jade = require('jade');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http  = require('http');
var api = require('./routes/api');
mongoose = require('mongoose');
restful = require('node-restful');
 mongoose = restful.mongoose;

var app = express();

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());



// mongoose.connect('mongodb://localhost/restful',function(err) {
//   console.log(err);
// });

// mongoose.connect('mongodb://Delke:Black2827@proximus.modulusmongo.net:27017/Onune8xe', function(err,data) {
//  console.log(data);
//  console.log(err);
//  //   if (err) throw err;
// });

var db = mongoose.connection;
db.on('open', function(callback) {
  console.log('connected to db');
 
});


app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

var port = 3000;
app.listen(port);
console.log('api is working on port 3000');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/:tag', api.findVideos);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
