const tool = require('./03_tool_add.js')
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