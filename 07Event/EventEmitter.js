/*

### 三、事件触发器 EventEmitter

Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。


#### 1、EventEmitter 类

events 模块只提供了一个对象： events.EventEmitter。

EventEmitter 的核心就是事件触发与事件监听器功能的封装。

 */

// EventEmitter.js
// const events = require('events');
// let eventEmitter = new events.EventEmitter();
// console.log(events);
// console.log(eventEmitter);
/*
打印结果：
console.log(events);
{ [Function: EventEmitter]
  EventEmitter: [Circular],
  usingDomains: false,
  defaultMaxListeners: [Getter/Setter],
  init: [Function],
  listenerCount: [Function] }

console.log(eventEmitter);
EventEmitter {
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined }
 */


/*

EventEmitter 对象如果在实例化时发生错误，会触发 error 事件，当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。

 */

// EventEmitter.js
// const events = require('events');
// // event 注册监听器
// let event = new events.EventEmitter();

// // 监听器绑定事件 someEvent
// event.on('someEvent', function() {
//     console.log('someEvent 事件触发！');
// });

// setTimeout(function() {
//     // 监听器发出事件
//     event.emit('someEvent');
// }, 1000);



/*

执行代码，1 秒后控制台输出了 'someEvent 事件触发！'。

其原理是 event 对象注册了事件 someEvent 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 someEvent，此时会调用 someEvent 的监听器。

EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义，对于每个事件，EventEmitter 支持若干个事件监听器。

当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

看下面这个例子：

*/

// EventEmitter.js
// const events = require('events');
// let emitter = new events.EventEmitter();
// // 注册监听器1
// emitter.on('someEvent', function(arg1, arg2) {
//     console.log('listener1', arg1, arg2);
// });
// // 注册监听器2
// emitter.on('someEvent', function(arg1, arg2) {
//     console.log('listener2', arg1, arg2);
// });
// // 触发 someEvent 事件
// emitter.emit('someEvent', '参数 arg1', '参数 arg2');

/*

执行结果：
```
listener1 参数 arg1 参数 arg2
listener2 参数 arg1 参数 arg2
```

上面代码中，emitter 为事件 someEvent 注册了两个监听事件，然后触发 someEvent 事件，结果中可以看到两个事件监听器回调函数被先后调用，这就是 EventEmitter 最简单的用法。

EventEmitter 提供了多个属性，如 on 和 emit，on 函数用于绑定函数，emit 属性用于触发一个事件。

下面具体来看一下 EventEmitter 的属性介绍。

*/



/*

#### 2、EventEmitter 的属性介绍

##### 2.1、方法

1、addListener(event, listener)

为指定事件添加一个监听器到监听器数组的尾部。


2、on(event, listener)

为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
```
server.on('connection', function (stream) {
  console.log('someone connected!');
});
```

3、once(event, listener)

为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
```
server.once('connection', function (stream) {
  console.log('Ah, we have our first user!');
});
```

4、emoveListener(event, listener)

移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器，它接受两个参数，第一个是事件名称，第二个是回调函数名称。
```
var callback = function(stream) {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

5、removeAllListeners([event])

移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

6、setMaxListeners(n)

默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息，setMaxListeners 函数用于提高监听器的默认限制的数量。


7、listeners(event)

返回指定事件的监听器数组。

8、emit(event, [arg1], [arg2], [...])

按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。


##### 2.2、类方法

1、listenerCount(emitter, event)

返回指定事件的监听器数量。
```
events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
events.emitter.listenerCount(eventName) //推荐
```


##### 2.3、事件

1、newListener

- event - 字符串，事件名称。
- listener - 处理事件函数。

该事件在添加新监听器时被触发。

2、removeListener

- event - 字符串，事件名称。
- listener - 处理事件函数。

从指定监听器数组中删除一个监听器，需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。



 */


/*

#### 3、实例应用

以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用。

 */

// EventEmitter.js
// const events = require('events');
// let eventEmitter = new events.EventEmitter();

// // 监听器1
// let listener1 = function listener1() {
//     console.log('监听器 listener1 执行。');
// };
// // 监听器2
// let listener2 = function listener2() {
//     console.log('监听器 listener2 执行。');
// };
// // 绑定 connection 事件，处理函数 listener1
// eventEmitter.addListener('connection', listener1);
// // 绑定 connection 事件，处理函数 listener2
// eventEmitter.on('connection', listener2);

// // 返回指定事件的监听器数量
// let eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + '个监听器监听连接事件。');

// // 处理 connection 事件
// eventEmitter.emit('connection');

// // 移除绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log('listener1 不再受监听。');
// // 再次触发连接事件
// eventEmitter.emit('connection');
// // 再次获取监听器监听链接事件次数
// let eventListeners_new = eventEmitter.listenerCount('connection');
// console.log(eventListeners_new + '个监听器监听连接事件。');

// console.log('程序执行完毕！');

/*

以上代码执行结果：
```
2个监听器监听连接事件。
监听器 listener1 执行。
监听器 listener2 执行。
listener1 不再受监听。
监听器 listener2 执行。
1个监听器监听连接事件。
程序执行完毕！
```

 */


/*

#### 4、error 事件

EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃，例如：

 */

// const events = require('evets');
// let emitter = new events.eventEmitter();
// emitter.emit('err');

/*

运行时会报错：
```
module.js:472
    throw err;
    ^
Error: Cannot find module 'evets'
    at Function.Module._resolveFilename (module.js:470:15)
    at Function.Module._load (module.js:418:25)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (D:\Note\Node.js\Node.js_Learning\05fs\NodeDemo\11_Eve
ntEmitter.js:275:17)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
```

 */

/*

#### 5、继承 EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它，包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

为什么要这样做呢？原因有两点：

首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。

其次 JavaScript 的对象机制是基于原型的，支持部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

 */












