/*

### 七、文件上传

以下实例我们创建一个用于上传文件的表单，使用 POST 方法，表单 enctype 属性设置为 multipart/form-data。


public/index.html
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>文件上传</title>
</head>

<body>
    <form action="/file_upload" method="post" enctype="multipart/form-data">
        选择一个文件上传：<input type="file" name="image" size="50">
        <input type="submit" value="上传">
    </form>
</body>

</html>
```

 */


// express07file_upload.js
const express = require('express');
let app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: '/tmp/'
}).array('image'));

app.post('/file_upload', (request, response) => {
    console.log(request.files[0]); // 上传文件的信息
    let des_file = __dirname + '/' + request.files[0].originalname;
    fs.readFile(request.files[0].path, (err, data) => {
        fs.writeFile(des_file, data, (err) => {
            if (err) {
                console.log(err);
                return false;
            } else {
                result = {
                    message: "File uploaded successfully!",
                    filename: request.files[0].originalname
                };
            };
            console.log(result);
            response.end(JSON.stringify(result));
        });
    });
});
const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`服务器运行在 http://${host}:${port}`);
});

/*

执行 node express07file_upload.js，在浏览器访问 127.0.0.1:3000/index.html，上传一张图片，成功上传后会出现在当前目录下。

![](https://upload-images.jianshu.io/upload_images/9373308-716f66abe55578b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9373308-a1bba9ba0bb6032b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/9373308-b1088e37952b4ff8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */



















