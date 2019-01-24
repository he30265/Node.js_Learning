/*

### 一、回调函数 callback

#### 1、回调函数

Node.js 异步编程的直接体现就是回调，异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

Node.js 使用了大量回调函数， 它的所有 API 都支持回调函数。

例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回，这样在执行代码时就没有阻塞或等待文件 I/O（输入输出）操作，这就大大提高了 Node.js 的性能，可以处理大量的并发请求。

回调函数一般作为函数的最后一个参数出现，例：
```
function fun1(name, age, callback) {};
function fun2(value, callback1, callback2) {};
```


#### 2、阻塞代码

创建一个 input.js 文件，并添加内容，例：

input.js
```
文件读取
```


 */

// callback.js
// const fs = require('fs');
// // readFileSync：同步读取文件
// let data = fs.readFileSync('input.js');
// console.log(data.toString());
// console.log('程序执行结束！');

/*

执行结果：
```
文件读取
程序执行结束！
```


#### 3、非阻塞代码

 */

// callback.js
const fs = require('fs');
fs.readFile('input.js', (err, data) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log(data.toString());
    };
});
console.log('程序执行结束！');

/*

执行结果：
```
程序执行结束！
文件读取
```

通过上面的两段代码，我们了解了阻塞与非阻塞的不同。

第一段代码在文件读取完毕后才执行下边的代码，如果未读取到文件或其他原因导致程序报错，那么下边的代码也无法执行。

第二段代码使用的是 fs.readFile（异步读取），不需要文件读取完毕，这样就可以在读取文件的同时执行下边的代码，即使出错，也不会中断程序，大大提高了程序的性能。

所以阻塞是按顺序执行的，非阻塞不需要按顺序执行，如果需要处理回调函数的参数，就需要写到回调函数内。



 */









