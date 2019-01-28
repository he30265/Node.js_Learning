/*

### 八、Cookie 管理

我们可以使用中间件向 Node.js 服务器发送 cookie 信息，以下代码输出了客户端发送的 cookie 信息。

 */

// express08Cookie.js
const express = require('express');
const cookieParser = require('cookie-parser');
const util = require('util');

let app = express();
app.use(cookieParser());
app.get('/', (request, response) => {
    console.log("Cookies:" + util.inspect(request.cookies));
    response.end();
});
const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`服务器运行在 http://${host}:${port}`);
});



/*

执行 node express08Cookie.js，在浏览器访问 127.0.0.1:3000/。

![](https://upload-images.jianshu.io/upload_images/9373308-234091a5887c3f20.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



 */



















