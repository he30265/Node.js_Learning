/*

### 六、GET 方法

以下实例演示了在表单中通过 POST 方法提交两个参数，我们可以使用 server.js 文件内的 process_post 路由器来处理输入。


public/index.html
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>GET 方法</title>
</head>

<body>
    <form action="http://127.0.0.1:3000/process_post" method="POST">
        First Name：<input type="text" name="first_name"> <br>
        Last Name：<input type="text" name="last_name">
        <input type="submit" value="提交">
    </form>
</body>

</html>
```

 */


// express06post.js
const express = require('express');
let app = express();
const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.use(express.static('public'));
app.get('/process_post', urlencodedParser, (request, response) => {
    // 输出 JSON 格式
    let result = {
        'first_name': request.query.first_name,
        'last_name': request.query.last_name
    };
    console.log(result);
    response.end(JSON.stringify(result));
});
const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`服务器运行在 http://${host}:${port}`);
});

/*

执行 node express06post.js，在浏览器访问 127.0.0.1:3000/index.html，向表单输入数据并提交。

![](https://upload-images.jianshu.io/upload_images/9373308-ee564af2be77bc7b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9373308-21b146d3b0244373.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



 */



















