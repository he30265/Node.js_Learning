// #### 2、删

// delete.js
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});
connection.connect();

// 设置 SQL 删除语句
let delSql = 'DELETE FROM info_test where id=0';
connection.query(delSql, (error, response) => {
    if (error) {
        console.log("删除失败！");
        console.log(error);
        return;
    } else {
        console.log("删除成功！");
        console.log(response);
    };
});
connection.end();

/*

执行 node delete.js

![](https://upload-images.jianshu.io/upload_images/9373308-69d1cb5d11ea3da5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

刷新 Navicat，会看到 id 为 0 的那条数据被删除了。

![](https://upload-images.jianshu.io/upload_images/9373308-f513bd8f11359ff0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */