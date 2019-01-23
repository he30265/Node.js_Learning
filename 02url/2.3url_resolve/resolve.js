// url 模块下 resolve 函数
// resolve: 追加或替换地址

const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url != '/favicon.ico') {
        console.log(url.resolve('127.0.0.1:3000/?userName=liu&userAge=24', 'userName=zhao'));
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('url 模块下 resolve 函数。');
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

/*

执行 node resolve.js，访问：127.0.0.1:3000/

```
127.0.0.1:3000/userName=zhao
```

 */