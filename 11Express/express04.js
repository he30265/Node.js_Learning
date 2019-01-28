/*

### 四、静态文件

Express 提供了内置的中间件 express.static 来设置静态文件如：图片，CSS，JavaScript 等，你可以使用 express.static 中间件来设置静态文件路径。

![](https://upload-images.jianshu.io/upload_images/9373308-f78f703b14fa069a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

例如，如果你将图片，CSS，JavaScript 等文件放在 public 目录下，你可以这么写：
```
app.use(express.static('public'));
```


 */

// express04.js
const express = require('express');
let app = express();
app.use(express.static('public'));
app.get('/', (request, response) => {
    response.send('express.static 静态文件。');
    response.end();
});
const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`服务器运行在 http://${host}:${port}`);
});

/*

执行 node express04.js，在浏览器访问 127.0.0.1:3000/images/user.jpg。

![](https://upload-images.jianshu.io/upload_images/9373308-f2ed1897db40343f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */







