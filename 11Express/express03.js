
/*

### 三、路由

路由决定了由谁(指定脚本)去响应客户端请求，在 HTTP 请求中，我们可以通过路由提取出请求的 URL 以及 GET/POST 参数。


 */


// express03.js
const express = require('express');
console.log(express);
let app = express();
// GET 请求
app.get('/', (request, response) => {
    console.log("主页 GET 请求。");
    response.send('主页 GET 请求。');
    response.end();
});

// POST 请求
app.post('/', (request, response) => {
    console.log("主页 POST 请求。");
    response.send('主页 POST 请求。');
    response.end();
});
// /del_user 页面 GET 请求
app.get('/del_user', (request, response) => {
    console.log("删除用户页面GET 请求。");
    response.send('删除用户页面。');
    response.end();
});
// /list_user 页面 GET 请求
app.get('/list_user', (request, response) => {
    console.log("用户列表页面 GET 请求。");
    response.send('用户列表页面。');
    response.end();
});
// 对页面 abcd,abxcd,ab123cd，等响应 GET　请求。
app.get('/ab*cd', (request, response) => {
    console.log("/ab*cd GET 请求。");
    response.send('/ab*cd GET 页面。');
    response.end();
});

const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`服务器运行在 http://${host}:${port}`);
});


/*
执行 node express03.js，访问 以下地址：

![](https://upload-images.jianshu.io/upload_images/9373308-9d7a363d2270beed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9373308-5e22924859d71fdf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9373308-00b05e43467a0a60.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9373308-012711c4271ca9a3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */










