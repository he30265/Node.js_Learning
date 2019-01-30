/*

> Node.js 连接 MySQL


#### 一、设计表

首先通过可视化工具进行表的设计，然后添加几条测试数据：

![](https://upload-images.jianshu.io/upload_images/9373308-56b069f4ee3b12f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![i](https://upload-images.jianshu.io/upload_images/9373308-7cb5dbe2e4caa659.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### 二、安装 Node.js 连接 MySQL 的包

```
npm i mysql -d
```


### 三、连接 MySQL

 */


// MySQL.js
// 引入 mysql 包
const mysql = require('mysql');
// mysql 连接信息
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
    port: 3306
});
// 开始链接
connection.connect();

// 查询 info_test 表
connection.query('SELECT * FROM info_test', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});
// 终止连接
connection.end();


/*

执行 node MySQL.js，连接成功界面如下：

![](https://upload-images.jianshu.io/upload_images/9373308-aa32d3ae237bbfba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


接下来就该实现增删改查的功能了。


 */





