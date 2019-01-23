// url 模块下 format 函数
// format: 逆向 parse

const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url != '/favicon.ico') {
        console.log(url.format({
            protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,
            search: '?userName=liu&userAge=24',
            query: {
                userName: 'liu',
                userAge: '24'
            },
            pathname: '/',
            path: '/?userName=liu&userAge=24',
            href: '/?userName=liu&userAge=24'
        }));
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('url 模块下 format 函数。');
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

/*

执行 node format.js，访问：127.0.0.1:3000/

```
/?userName=liu&userAge=24
```

 */