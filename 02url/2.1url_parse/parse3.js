// url 模块下 parse 模块（parse 扩展）
// parse: 获取地址信息

const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url != '/favicon.ico') {
        /*
        parse 方法可以传两个参数：
        第一个参数是地址。
        第二个参数是 true 的话表示把 get 传值转换成对象。
         */
        const result = url.parse(request.url, true);
        console.log(result);
        console.log(result.query.userName);
        console.log(result.query.userAge);
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('url 模块下 parse 模块（parse 扩展）。');
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

/*

执行 node parse3.js，访问：127.0.0.1:3000/?userName=liu&userAge=24

```
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?userName=liu&userAge=24',
  query: { userName: 'liu', userAge: '24' },
  pathname: '/',
  path: '/?userName=liu&userAge=24',
  href: '/?userName=liu&userAge=24' }
liu
24
```


 */