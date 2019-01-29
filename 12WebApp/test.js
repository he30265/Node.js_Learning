/*

> 本篇文章开始讲解使用 Node.js 进行 Web 开发。


### 一、快速开始


#### 1、建立项目

通过下面命令建立网站基本结构（webapp 为项目的名称）：
```
express -e webapp
```
执行命令后在当前目录下出现了一些文件，并且下边提示我们通过 npm install 安装依赖。

![](https://upload-images.jianshu.io/upload_images/9373308-e606ba0e6399c0ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9373308-52e489dc15c01a03.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9373308-fc03b6230fae5ba1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


在 npm install 之后，打开 webapp 目录下的 package.json，可以看到已安装的包及对应的版本号。

![](https://upload-images.jianshu.io/upload_images/9373308-84e53942481f1f66.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### 2、启动服务器

注意，我们之前开启 Node.js 服务器，都是执行 node XXX.js，然后去浏览器访问即可，但是 express 4.X 以上就不是这种方式了，应该是 npm start，端口配置在 bin/www 中。

![](https://upload-images.jianshu.io/upload_images/9373308-2940144a0449c33f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/9373308-7367a0933dce9305.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

启动成功访问 localhost:3000/。

![](https://upload-images.jianshu.io/upload_images/9373308-77f42a6ade451c67.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### 3、项目结构

我们看一下 express 在 webapp 这个目录下都生成了哪些文件。

![](https://upload-images.jianshu.io/upload_images/9373308-7a978cd82fe20139.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### app.js

```
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
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

module.exports = app;
```

app.js 是项目的入口，首先引入了一系列我们所需要的模块，然后引入了 routes 目录下的两个本地模块，它的功能是为指定路径组织返回内容，相当于 MVC 架构中的控制器。

接下来是视图引擎设置， app.set() 是 Express 的参数设置工具，接受一个键（key）和一个值（value），可用的参
数如下所示：

- basepath：基础地址，通常用于 res.redirect() 跳转。
- views：视图文件的目录，存放模板文件。
- view engine：视图模板引擎。
- view options：全局视图参数对象。
- view cache：启用视图缓存。
- case sensitive routes：路径区分大小写。
- strict routing：严格路径，启用后不会忽略路径末尾的“ / ”。
- jsonp callback：开启透明的 JSONP 支持

Express 依赖于 connect，提供了大量的中间件，可以通过 app.use() 启用


##### routes/index.js

```
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

routes/index.js 是路由文件，相当于控制器，用于组织展示的内容，app.js 中通过 app.get('/', routes.index); 将“ / ”路径映射到 exports.index
函数下，其中只有一个语句 res.render('index', { title: 'Express' })，功能是
调用模板解析引擎，翻译名为 index 的模板，并传入一个对象作为参数，这个对象只有一个
属性，即 title: 'Express'。



 */




/*

##### views/index.ejs

```
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```

index.ejs 是模板文件，即 routes/index.js 中调用的模板，内容是：
```
<h1><%= title %></h1>
<p>Welcome to <%= title %></p>
```
它的基础是 HTML 语言，其中包含了形如 <%= title %> 的标签，功能是显示引用的
变量，即 res.render 函数第二个参数传入的对象的属性。



### 三、路由控制

#### 1、工作原理



 */









