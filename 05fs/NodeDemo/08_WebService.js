/*

### 八、创建 web 服务器

> 到这里，我们利用 http 模块、url 模块、path 模块、fs 模块创建一个 Web 服务器。

**什么是 Web 服务器？**

Web 服务器一般指网站服务器，是指驻留于因特网上某种类型计算机的程序，可以像浏览器等 Web 客户端提供文档，也可以放置网站文件，让全世界浏览；可以放置数据文件，让全世界下载。

目前最主流的三个 Web 服务器是 Apache、Nginx、IIS。

下面，我们使用 Node 来创建一个 Web 服务：

首先创建一个项目目录和一个 08_WebService.js，在项目目录下新建一个 index.html 和 404.html，为了下边的测试，我们在 style 目录下添加一个样式表，可以加一些初始化样式，然后在 index.html 中引用它。

![](https://upload-images.jianshu.io/upload_images/9373308-7c71803a11647092.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 */
// 08_WebService.js
// const http = require('http');
// const fs = require('fs');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((request, response) => {
//     // 获取响应路径
//     let pathName = request.url;

//     // 默认加载路径
//     if (pathName == '/') {
//         // 默认加载首页
//         pathName = 'index.html';
//     };

//     // 过滤 /favicon.ico 的请求
//     if (pathName != '/favicon.ico') {
//         // 读取 08_WebService 目录下的 index.html
//         fs.readFile('08_WebService/' + pathName, (err, data) => {
//             if (err) {
//                 // 如果不存在这个文件
//                 console.log('404 Not Fount!');
//                 fs.readFile('08_WebService/404.html', (errorNotFound, dataNotFound) => {
//                     if (errorNotFound) {
//                         console.log(errorNotFound);
//                     } else {
//                         response.statusCode = 200;
//                         response.setHeader('Content-Type', 'text/html;charset=utf-8');
//                         response.end(dataNotFound);
//                     };
//                 });
//                 return;
//             } else {
//                 // 如果存在这个文件，返回该文件
//                 response.statusCode = 200;
//                 response.setHeader('Content-Type', 'text/html;charset=utf-8');
//                 response.end(data);
//             };
//         });
//     };
// });

// server.listen(port, hostname, () => {
//     console.log(`服务器运行在 http://${hostname}:${port}`);
// });

/*

执行 node 08_WebService.js，访问 localhost:3000。

如果访问成功，此时就可以看到 index.html 页面了，但是在检查中我们发现引入的 css.css 文件并没有生效，那是因为在 Content-Type 中没有设置 css 等文件的类型。

![](https://upload-images.jianshu.io/upload_images/9373308-dbe78fb78660beff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9373308-e34a6581909210ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

所以下一步就该动态加载 html、css、js 这些文件了。

修改 08_WebService.js。

08_WebService.js：

 */

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((request, response) => {
//     // 获取响应路径
//     let pathName = request.url;

//     // 默认加载路径
//     if (pathName == '/') {
//         // 默认加载首页
//         pathName = 'index.html';
//     };

//     // 获取文件的后缀名
//     let extName = path.extname(pathName);

//     // 过滤 /favicon.ico 的请求
//     if (pathName != '/favicon.ico') {
//         // 读取 08_WebService 目录下的 index.html
//         fs.readFile('08_WebService/' + pathName, (err, data) => {
//             if (err) {
//                 // 如果不存在这个文件
//                 console.log('404 Not Fount!');
//                 fs.readFile('08_WebService/404.html', (errorNotFound, dataNotFound) => {
//                     if (errorNotFound) {
//                         console.log(errorNotFound);
//                     } else {
//                         response.statusCode = 200;
//                         response.setHeader('Content-Type', 'text/html;charset=utf-8');
//                         response.end(dataNotFound);
//                     };
//                 });
//                 return;
//             } else {
//                 // 如果存在这个文件，返回该文件
//                 // 获取文件类型
//                 let ext = getExt(extName);
//                 response.statusCode = 200;
//                 response.setHeader('Content-Type', ext + ';charset=utf-8');
//                 response.end(data);
//             };
//         });
//     };
// });

// server.listen(port, hostname, () => {
//     console.log(`服务器运行在 http://${hostname}:${port}`);
// });

// // 获取后缀名方法
// getExt = (extName) => {
//     switch (extName) {
//         case '.html':
//             return 'text/html';
//         case '.css':
//             return 'text/css';
//         case '.js':
//             return 'text/js';
//         default:
//             return 'text/html';
//     };
// };

/*

执行 node 08_WebService.js，访问 localhost:3000。

此时再去检查页面，就会发现 css.css 已经可以成功引用了。

![](https://upload-images.jianshu.io/upload_images/9373308-e93fde8905ef0d23.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

但是这仅仅设置了三种文件类型，如果需要更多类型的文件呢？

接下来我们再次修改一下 08_WebService.js，让它能够适应更多类型文件的请求。

首先新建 08_ext.json 文件，然后在里边添加数据，因为数据比较多，你可以去[GitHub地址](https://github.com/he30265/Node.js_Learning/blob/master/05fs/NodeDemo/08_ext.json)下载，在 json 中定义了各种文件类型。

![](https://upload-images.jianshu.io/upload_images/9373308-84c71d655fed26f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

接下来再次修改 08_WebService.js。

08_WebService.js：

 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    // 获取响应路径
    let pathName = request.url;

    // 默认加载路径
    if (pathName == '/') {
        // 默认加载首页
        pathName = 'index.html';
    };

    // 获取文件的后缀名
    let extName = path.extname(pathName);

    // 过滤 /favicon.ico 的请求
    if (pathName != '/favicon.ico') {
        // 读取 08_WebService 目录下的 index.html
        fs.readFile('08_WebService/' + pathName, (err, data) => {
            if (err) {
                // 如果不存在这个文件
                console.log('404 Not Fount!');
                fs.readFile('08_WebService/404.html', (errorNotFound, dataNotFound) => {
                    if (errorNotFound) {
                        console.log(errorNotFound);
                    } else {
                        response.statusCode = 200;
                        response.setHeader('Content-Type', 'text/html;charset=utf-8');
                        response.end(dataNotFound);
                    };
                });
                return;
            } else {
                // 如果存在这个文件，返回该文件
                // 获取文件类型
                let ext = getExt(extName);
                response.statusCode = 200;
                response.setHeader('Content-Type', ext + ';charset=utf-8');
                response.end(data);
            };
        });
    };
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

// 获取后缀名方法
getExt = (extName) => {
    // 读取 08_ext.json
    // readFile 是异步操作，所以需要用 readFileSync
    let data = fs.readFileSync('08_ext.json');
    // 因为文件是通过服务器获取的，所以先将数据转换为 javascript 对象（字符串），然后再转换为 JSON 对象。
    let ext = JSON.parse(data.toString());
    return ext[extName];
};

// 至此，我们已经创建了一个简单的 web 服务器。
//
