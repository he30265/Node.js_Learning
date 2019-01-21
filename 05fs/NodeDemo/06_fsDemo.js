// #### 1、判断是否有 upload 目录
// const fs = require("fs");
// fs.stat("upload", (err, stats) => {
//     if (err) {
//         // 如果没有，创建 upload 目录
//         fs.mkdir("upload", (err) => {
//             if (err) {
//                 console.log(err);
//                 return false;
//             } else {
//                 console.log("创建成功！");
//             };
//         })
//     } else {
//         console.log(stats.isDirectory()); // true
//         console.log("有 upload 目录，你可以做更多操作！");
//     };
// });
/*

执行 06_fsDemo.js。

打印结果：
```
console.log(stats.isDirectory()); // true
有 upload 目录，你可以做更多操作！
```


*/


// #### 2、读取目录全部文件
const fs = require("fs");
fs.readdir("node_modules/", (err, files) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log(files);
        let filesArr = [];

        (function getFile(i) {
            // 循环结束
            if (i == files.length) {
                // 打印出所有目录
                console.log("目录");
                console.log(filesArr);
                return false;
            };

            // 判断目录是文件还是文件夹
            fs.stat("node_modules/" + files[i], (err, stats) => {
                if (stats.isDirectory()) {
                    filesArr.push(files[i]);
                };
                // 递归调用
                getFile(i + 1);
            });
        })(0);
    };
});

/*

执行 06_fsDemo.js。

打印结果：
```
[ '03_tool_multiply.js', 'my_module', 'test' ]
目录
[ 'my_module' ]
```

 */
