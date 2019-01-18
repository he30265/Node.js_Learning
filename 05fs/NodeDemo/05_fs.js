// #### 1、fs.stat：检测是文件还是目录
// let fs = require("fs");
// fs.stat('05_fs.js', (error, stats) => {
//     if (error) {
//         console.log(error);
//         return false;
//     } else {
//         console.log(stats);
//         console.log(`文件：${stats.isFile()}`); // 文件：true
//         console.log(`目录：${stats.isDirectory()}`); // 目录：false

//         return false;
//     };
// });

/*

执行 node 05_fs.js。

console.log(stats)：
{ dev: 636204,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 1407374883609714,
  size: 242,
  blocks: undefined,
  atime: 2018-12-25T09:14:40.866Z,
  mtime: 2019-01-15T09:18:06.561Z,
  ctime: 2019-01-15T09:18:06.561Z,
  birthtime: 2018-12-25T09:14:40.866Z }

console.log(`文件：${stats.isFile()}`); // 文件：true
console.log(`目录：${stats.isDirectory()}`); // 目录：false

- stats.isFile()  如果是文件返回 true，否则返回 false。
- stats.isDirectory() 如果是目录返回 true，否则返回 false。
- stats.isBlockDevice() 如果是块设备返回 true，否则返回 false。
- stats.isCharacterDevice() 如果是字符设备返回 true，否则返回 false。
- stats.isSymbolicLink()  如果是软链接返回 true，否则返回 false。
- stats.isFIFO()  如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
- stats.isSocket()  如果是 Socket 返回 true，否则返回 false。

 */



// #### 2、fs.mkdir：创建目录
// let fs = require("fs");
// fs.mkdir('images', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("目录创建成功！");
//     };
// });

/*
接收参数：

- path：将创建的目录路径。
- mode：目录权限（读写权限），默认 0777。
- callback：回调，传递异常参数 err。

执行 node 05_fs.js。

会发现目录下多了一个 images 文件夹。

 */



// #### 3、fs.rmdir：删除目录
// let fs = require("fs");
// fs.rmdir('images', (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("目录删除成功！");
//     };
// });

/*

接收参数：

- path：将创建的目录路径。
- mode：目录权限（读写权限），默认 0777。
- callback：回调，传递异常参数 err。

执行 node 05_fs.js。

会发现目录下 images 文件夹被删除。

 */


// #### 4、fs.writeFile 创建写入文件
// let fs = require("fs");
// fs.writeFile("index.js", "hello NodeJS！", (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("文件写入成功！");
//     };
// });

/*

接收参数：

- filename (String) 文件名称。
- data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
- encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
- mode (Number) 文件读写权限，默认 438。
- flag (String) 默认值 'w'。
- callback { Function } 回调，传递一个异常参数 err。

执行 node 05_fs.js。

会发现目录下多了一个 index.js 文件夹，并且添加了“hello NodeJS！”的内容。

注意，这样的写入，是清空原文件中的所有数据，然后添加“hello NodeJS！”这句话，即：存在即覆盖，不存在即创建。

 有创建就有删除，感兴趣的可以使用 fs.unlink 进行文件的删除，再次不做过多讲解。

 */

// #### 5、fs.unlink 删除文件
// let fs = require("fs");
// fs.unlink("index.js", (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("删除成功！");
//     };
// });

/*

执行 node 05_fs.js。

会发现目录下 index.js 文件被删除。

 */


// #### 6、fs.appendFile 追加文件
// let fs = require("fs");
// fs.appendFile("index.js", "追加的内容", (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("追加成功！");
//     };
// });

/*

执行 node 05_fs.js。

会发现目录下 index.js 文件后有追加了一段话“追加的内容”。

 */


// #### 7、fs.readFile 读取文件
// let fs = require("fs");
// fs.readFile("index.js", (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("读取文件成功！");
//         console.log(data); // <Buffer 68 65 6c 6c 6f 20 4e 6f 64 65 4a 53 ef bc 81 e8 bf bd e5 8a a0 e7 9a 84 e5 86 85 e5 ae b9>
//     };
// });

/*

执行 node 05_fs.js。

console.log(data) 打印结果：
<Buffer 68 65 6c 6c 6f 20 4e 6f 64 65 4a 53 ef bc 81 e8 bf bd e5 8a a0 e7 9a 84 e5 86 85 e5 ae b9>

 */


// #### 8、fs.readdir 读取目录
// let fs = require("fs");
// fs.readdir("node_modules", (err, data) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("读取目录成功！");
//         console.log(data); // [ '03_tool_multiply.js', 'my_module' ]
//     };
// });

/*

执行 node 05_fs.js。

console.log(data) 打印结果：
[ '03_tool_multiply.js', 'my_module' ]

 */


// #### 9、fs.rename 重命名
// let fs = require("fs");
// fs.rename("index.js", "new_index.js", (err) => {
//     if (err) {
//         console.log(err);
//         return false;
//     } else {
//         console.log("重命名成功！");
//     };
// });

/*

执行 node 05_fs.js。

会发现目录下 index.js 文件被修改为 new_index.js。

 */


// #### 10、补充：fs.rename 还可以剪切
let fs = require("fs");
fs.rename("new_index.js", "node_modules/new_index.js", (err) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log("剪切成功！");
    };
});

/*

执行 node 05_fs.js。

会发现目录下 new_index.js 文件被移动到了 node_modules 目录下。

 */
