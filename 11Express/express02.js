/*

> Express 是一个简洁而灵活的 node.js Web 应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具，使用 Express 可以快速地搭建一个完整功能的网站。

Express 除了为 http 模块提供了更高层的接口外，还实现了
许多功能，其中包括：

- 路由控制；
- 模板解析支持；
- 动态视图；
- 用户会话；
- CSRF 保护；
- 静态文件服务；
- 错误控制器；
- 访问日志；
- 缓存；
- 插件支持。

需要指出的是，Express 不是一个无所不包的全能框架，像 Rails 或 Django 那样实现了
模板引擎甚至 ORM （Object Relation Model，对象关系模型），它只是一个轻量级的 Web架，多数功能只是对 HTTP 协议中常用操作的封装，更多的功能需要插件或者整合其他模块来完成。



### 一、安装 Express


执行：
```
npm install express -s
```

![](https://upload-images.jianshu.io/upload_images/9373308-1251c223c1c8cfed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此外还需要安装几个模块：
```
npm install body-parse -s
npm install cookie-parser -s
cnpm install multer -s
```

- body-parser：node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
- cookie-parser：这就是一个解析Cookie的工具，通过 request.cookies 可以取到传过来的 cookie，并把它们转成对象。
- multer：node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。


### 二、Express 框架实例


 */

// express02.js
const express = require('express');
let app = express();
app.get('/', (request, response) => {
    response.send('Express 模块。');
    response.end();
});
const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`服务器运行在 http://${host}:${port}`);
});

/*

执行 node express02.js，访问 127.0.0.1:3000/。

![](https://upload-images.jianshu.io/upload_images/9373308-e18d08e5573a1c19.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */