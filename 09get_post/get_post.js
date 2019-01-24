/*

09 GET 与 POST 请求

在很多场景中，我们的服务器都需要跟用户的浏览器打交道，如表单提交，表单提交到服务器一般都使用 GET/POST 请求。

本篇文章将为大家介绍 Node.js GET/POST 请求。


### 一、获取 GET 请求内容

GET 请求被直接嵌入到 URL 路径中，包括“？”后面的部分，因此可以手动解析后面的内容作为 GET 请求参数，url 模块中的 parse 函数提供了这个功能。

 */

// get_post.js
// const http = require('http');
// const url = require('url');
// const util = require('util');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain;charset=utf-8');
//     if (request.url != '/favicon.ico') {
//         console.log(url.parse(request.url, true));
//     }
//     // response.end(url.parse(request.url, true)); //throw new TypeError('First argument must be a string or Buffer');
//     response.end(util.inspect(url.parse(request.url, true)));
// });
// server.listen(port, hostname, () => {
//     console.log(`服务器运行在 http://${hostname}:${port}`);
// });


/*

在之前 Node.js 基础模块文章中讲解过 url 模块下 parse 函数，这个函数可以解析浏览器访问的地址，上边这个例子在浏览器访问 127.0.0.1:3000/?name=LiuZhenghe&&url=liuzhenghe.com/，可以在命令窗口看到解析的结果：

![](https://upload-images.jianshu.io/upload_images/9373308-4e38d68a12c3a55b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果要打印到页面呢？我们如果把 console.log() 中的内容直接放到 response.end() 中，刷新页面程序就会报错，提示 .end() 第一个参数必须是字符串或缓冲区，此时就需要用到 util.inspect 这个方法，将对象转换为字符串。

此时再刷新页面，将会看到如下结果：

![](https://upload-images.jianshu.io/upload_images/9373308-97635808384c6791.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

下面我们来获取 URL 的参数。


 */

// get_post.js
// const http = require('http');
// const url = require('url');
// const util = require('util');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain;charset=utf-8');
//     let result = url.parse(request.url, true);
//     response.write(util.inspect(url.parse(request.url, true)));
//     response.write('\n');
//     response.write('网站名称：' + result.query.name);
//     response.write('\n');
//     response.write('网站地址：' + result.query.url);
//     response.end();
// });
// server.listen(port, hostname, () => {
//     console.log(`服务器运行在 http://${hostname}:${port}`);
// });


/*

在浏览器访问 127.0.0.1:3000/?name=LiuZhenghe&&url=liuzhenghe.com/，可以看到下边结果：

![](https://upload-images.jianshu.io/upload_images/9373308-2359c4712eaf6f51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */


/*

### 二、获取 POST 请求内容

POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。

比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的 POST 请求会大大消耗服务器的资源，所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。

 */

// get_post.js
// const http = require('http');
// const util = require('util');
// const querystring = require('querystring');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((request, response) => {
//     // 定义一个 post 变量，用于暂存请求体信息
//     let post = '';
//     // 通过 request 的 data 事件监听函数，每当接收到请求体的数据，就累加到 post 变量中
//     request.on('data', function(chunk) {
//         post += chunk;
//     });
//     // 在 end 事件触发后，通过 querystring.parse 将 post 解析为真正的 POST 请求格式，然后向客户端返回
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain;charset=utf-8');
//     request.on('end', function(chunk) {
//         post = querystring.parse(post);
//         response.end(util.inspect(post));
//     });
// });
// server.listen(port, hostname, () => {
//     console.log(`服务器运行在 http://${hostname}:${port}`);
// });

/*

以下实例表单通过 POST 提交并输出数据：

 */

// get_post.js
const http = require('http');
const util = require('util');
const querystring = require('querystring');
const hostname = '127.0.0.1';
const port = 3000;
let postHTML = '<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
    '<meta charset="UTF-8">' +
    '<title>get&post</title>' +
'</head>' +
'<body>' +
'<form action="" method="post">' +
    '网站名：<input type="text" name="name"><br>' +
    '网站地址：<input type="text" name="url"><br>' +
    '<input type="submit">' +
'</form>' +
'</body>' +
'</html>';
const server = http.createServer((request, response) => {
    // 定义一个 post 变量，用于暂存请求体信息
    let body = '';
    request.on('data', function(chunk) {
        body += chunk;
    });
    request.on('end', function() {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        if (body.name && body.url) {
            // 输出提交的数据
            response.write('网站名称：' + body.name);
            response.write('<br>');
            response.write('网站地址：' + body.url);
        } else {
            // 输出表单
            response.write(postHTML);
        };
        response.end();
    });
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});


/*

![](https://upload-images.jianshu.io/upload_images/9373308-399c70deb4145525.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

提交后：

![](https://upload-images.jianshu.io/upload_images/9373308-5e2412f934c91135.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */







