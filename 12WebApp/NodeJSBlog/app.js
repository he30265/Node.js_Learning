var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var settings = require('./settings');
var index = require('./routes/index');
var users = require('./routes/users');

// 字符串加密模块
var crypto = require('crypto');

var app = express();


// view engine setup
// 设置模板引擎与模板目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// 设置 icon 图标
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// 将请求体放入 request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// 处理 cookie
app.use(cookieParser());


var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
app.use(session({
    secret: settings.cookieSecret,
    store: new MongoStore({
        db: settings.db,
    })
}));



// 视图交互
// 最新版本的 Express 已经不支持 flash 了，需要先通过 npm 安装 connect-flash 并引用
var flash = require('connect-flash');
app.use(flash());
app.use(function(req, res, next) {
    console.log("app.usr local");
    res.locals.user = req.session.user;
    res.locals.post = req.session.post;
    var error = req.flash('error');
    res.locals.error = error.length ? error : null;
    var success = req.flash('success');
    res.locals.success = success.length ? success : null;
    next();
});

// 静态文件接口
app.use(express.static(path.join(__dirname, 'public')));

// 路由控制
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
// 404 错误处理句柄
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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





// ----------------------------------------------------------------------------

// module.exports = app;

// 应用程序自启配置，上线后删掉下面代码，并取消上边 module.exports = app; 的注释
var debug = require('debug')('my-application');
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
// console.log("访问：http://localhost:3000/");