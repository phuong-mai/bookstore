var createError = require('http-errors');
var express = require('express');
var path = require('path');
var http = require('http');
var useragent = require('express-useragent');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var srv = http.createServer(function (req, res) {
  var source = req.headers['user-agent'],
  ua = useragent.parse(source);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(JSON.stringify(ua));
});
var express = require('express');
var app = express();
var useragent = require('express-useragent');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
let socket = require('./config/socketio');
socket(io);

app.use(useragent.express());
app.get('/', function(req, res){
    
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/socket.io/socket.io.js', express.static('/node_modules/socket.io/lib/socket.js'))

io.on('connection', function(socket){
  console.log('connect success');
  socket.on('join', function(data){

    socket.emit();

    //log other socket.io-id's in the room
    your_namespace_socket.adapter.clients([room], (err, clients) => {
      console.log(clients);
    });
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(8080);
module.exports = app;
