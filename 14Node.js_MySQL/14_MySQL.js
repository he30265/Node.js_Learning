/*

### 十四、Node.js 连接 MySQL

新建一个目录 Node.js_MySQL，目录内将会新增 Node.js 连接 MySQL 的方法，增删改查功能的实现。


#### 1、设计表

首先通过可视化工具进行表的设计，然后添加几条测试数据：

![](https://upload-images.jianshu.io/upload_images/9373308-56b069f4ee3b12f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![i](https://upload-images.jianshu.io/upload_images/9373308-7cb5dbe2e4caa659.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### 2、安装 Node.js 链接 MySQL 的包

```
npm i mysql -d
```


 */


// 14_MySQL.js
// 引入 mysql
const mysql = require('mysql');
// mysql 链接信息
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

执行 node 14_MySQL.js，连接成功界面如下：

![](https://upload-images.jianshu.io/upload_images/9373308-d6757b9de7ec4559.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


接下来就该实现增删改查的功能了。


 */

/*

#### 3、增删改查。

在 Node.js_MySQL 目录下新建增删改查文件。

![](https://upload-images.jianshu.io/upload_images/9373308-73232b150e0d13c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 */

