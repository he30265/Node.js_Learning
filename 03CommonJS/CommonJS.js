/*
3.1 什么是 CommonJS？

CommonJS 就是为 JS 的表现来制定规范，因为 JS 没有模块系统、标准库较少、缺乏包管理工具，所以 CommonJS 应运而生，它希望 JS 可以在任何地方运行，而不只是在浏览器中，从而达到 Java、C#、PHP 这些后端语言具备开发大型应用的能力。


3.2 CommonJS 的应用？

- 服务器端 JavaScript 应用程序（Node.js）。
- 命令行工具。
- 桌面图形界面应用程序。


3.3 CommonJS 与 Node.js 的关系？

CommonJS 就是模块化的标准，Node.js 就是 CommonJS（模块化）的实现。

3.4 Node.js 中的模块化？

在 Node 中，模块分为两类：

一是 Node 提供的模块，称为核心模块，例如 http 模块、url 模块、fs 模块。

二是用户编写的模块，称为文件模块，比如接下来要新建一个 js 文件，并在里边添加的工具模块，通过 exports 或者 module.exports 将模块导出，并通过 require 引入这些模块。



 */
const tool = require('./tools.js')
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url != '/favicon.ico') {
        console.log(tool.length(1,2,3));
        console.log(tool.sum(1,2,3));
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('CommonJS，调取了 tool.js 工具模块中的 length() 和 sum() 两个方法。');
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

/*

执行 node CommonJS.js，访问：127.0.0.1:3000/

```
3
6
```

 */