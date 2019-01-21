/*

### 九、非阻塞 I/O 事件驱动

 Java、PHP 或者 .NET 等服务端语言，会为每一个客户端的连接创建一个新的线程。

Node.js 不会为每一个客户连接创建一个新的线程，而仅仅使用一个线程，当有用户连接了，就会触发一个内部事件，通过非租塞 I/O、事件驱动机制，让 Node.js 程序宏观上也是并行的。

 使用 Node.js，一个 8GB 内存的服务器，可以同时处理超过 4 万用户的连接。

在编程中，我们是希望程序能够按照我们编写的一行一行的执行：
```
console.log(1);
console.log(2);
console.log(3);
// 1
// 2
// 3
```

但是，事与愿违，有时候会执行一些异步方法：


 */

// console.log(1);
// const fs = require('fs');
// getExt = () => {
//     fs.readFile('08_ext.json', (err, data) => {
//         console.log(2);
//     });
// };
// getExt();
// console.log(3);

/*

执行结果：
```
1
3
2
```

上面代码中，由于 fs.readFile 是 Node.js 中的异步函数，所以先执行了 1 和 3，最后才执行了 fs.readFile 方法中的 2。

可以看出 Node.js 不会因为一段代码的逻辑错误而导致其他代码无法运行，这就导致了一个问题，那就是 3 也许不能拿到 2 的执行结果了，这就是 Node.js 的非阻塞 I/O 事件驱动，那么如何解决呢？

1. 通过回调函数。
2. 通过 Node.js 的 events 模块。

第一步：通过回调函数将数据提取出来。

 */

// const fs = require('fs');
// getExt = (callback) => {
//     fs.readFile('08_ext.json', (err, data) => {
//         callback(data);
//     });
// };
// getExt((result) => {
//     console.log(result.toString());
// });

/*

第二步：通过 Node.js 的 events 模块来解决这个异步问题：

Node.js 事件循环：

- Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
- Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
- Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件。


 */

const fs = require('fs');
// 引入 events 模块
const events = require('events');
// 实例化事件对象
let EventEmitter = new events.EventEmitter();
getExt = () => {
    fs.readFile('08_ext.json', (err, data) => {
        // 将 data 广播出去
        EventEmitter.emit('data', data.toString());
    });
};
getExt();
// 监听 data
EventEmitter.on('data', (ext) => {
    console.log(ext);
});

/*

在这里，EventEmitter.on 通过监听 data 的形式，获取了 getExt 内部的执行结果，如此，我们就了解了 Node.js 的 I/O 事件及 events 模块

 */













