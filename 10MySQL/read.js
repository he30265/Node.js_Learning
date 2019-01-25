// #### 4、查

// read.js
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});
connection.connect();

// 设置 SQL 修改语句
let readSql = 'SELECT * FROM info_test';
connection.query(readSql, (error, response) => {
    if (error) {
        console.log("查询失败！");
        console.log(error);
        return;
    } else {
        console.log("查询成功！");
        console.log(response);
    };
});
connection.end();

/*

执行 node read.js

![](https://upload-images.jianshu.io/upload_images/9373308-b877ffe44ebe94ea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





 */