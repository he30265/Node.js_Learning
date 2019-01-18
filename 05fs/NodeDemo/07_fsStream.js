// ### 六、fs 流

// #### 1、fs 流及其读取
// 首先创建一个 index.js 文件，并添加测试文本。
let fs = require("fs");
// 流的方式读取文件
let fileReadStream = fs.createReadStream("index.js");
// 读取次数
let count = 0;
// 保存数据
let str = "";
// 开始读取
fileReadStream.on("data", (chunk) => {
    console.log(`${++count} 接收到：${chunk.length}`);
    str += chunk;
});
// 读取完成
fileReadStream.on("end", () => {
    console.log("结束");
    console.log(count);
    console.log(str);
});
// 读取失败
fileReadStream.on("err", (err) => {
    console.log(err);
});

/*

执行 07_fsStream.js。

打印结果：
```
1 接收到：40
结束
1
fs 流及其读取
```

 */



// #### 2、流的写入

// let fs = require("fs");
// let data = "存入数据...";
// // 创建一个可以写入的流，写入到 index.js
// let fileWriteStream = fs.createWriteStream("index.js");
// // 开始写入
// fileWriteStream.write(data, "utf8");
// // 写入完成
// fileWriteStream.end();
// fileWriteStream.on("finish", () => {
//     console.log("写入完成！");
// });


/*

执行 07_fsStream.js。

打开 index.js 文件，发现里面内容变成了“存入数据...”。

打印结果：
```
写入完成！
```

以上我们就通过流的形式进行了读取和写入的操作。

 */