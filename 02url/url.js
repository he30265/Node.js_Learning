// url 模块
const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    // 过滤掉 request.url == '/favicon.ico' 的情况，否则会打印两次结果
    if (request.url != '/favicon.ico') {
        console.log(url);
    };
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain;charset=utf-8');
    response.end('url 模块。');
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

/*

执行 node url.js，访问：127.0.0.1:3000/

{ parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL:
   { [Function: URL]
     originFor: [Function],
     domainToASCII: [Function],
     domainToUnicode: [Function] },
  Url: [Function: Url] }


 */