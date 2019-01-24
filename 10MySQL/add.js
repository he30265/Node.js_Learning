// #### 1、增

// add.js
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});
connection.connect();

// 设置 SQL 插入语句
let addSql = 'INSERT INTO info_test(id,name,age) VALUES(0,?,?)';
// 插入数据
let addSqlParams = ['zhao', '18'];
// 链接 SQL 并实施语句
connection.query(addSql, addSqlParams, (error, response) => {
    if (error) {
        console.log("新增失败！");
        console.log(error);
        return;
    } else {
        console.log("新增成功！");
        console.log(response);
    };
});
connection.end();

/*

执行 node add.js

![](https://upload-images.jianshu.io/upload_images/9373308-6cf818b8e0365e24.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

刷新 Navicat，会看到新添加了一条数据。

![](https://upload-images.jianshu.io/upload_images/9373308-d0db5d55188cacc3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */