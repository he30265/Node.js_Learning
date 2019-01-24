// update.js
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
let updateSql = 'UPDATE info_test SET name = ?,age = ? WHERE ID = ?';
// 要修改的数据
let updateSqlParams = ['Wang', '18', 1];
connection.query(updateSql, updateSqlParams, (error, response) => {
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

执行 node update.js

![](https://upload-images.jianshu.io/upload_images/9373308-30949f36365dbc62.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

刷新 Navicat，会看到 id 为 1 的那条数据被修改了。

![](https://upload-images.jianshu.io/upload_images/9373308-5abdd95b80f3f9d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


 */