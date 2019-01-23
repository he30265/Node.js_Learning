// url 模块下 parse 函数
// parse: 获取地址信息

const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url != '/favicon.ico') {
        console.log(url.parse('http://www.baidu.com'));
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('url 模块下 parse 函数。');
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

/*

执行 node parse.js，访问：127.0.0.1:3000/

```
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://www.baidu.com/' }
```

 */