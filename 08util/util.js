/*

util 模块


> util（工具）是一个 Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。


### 一、util.inherits

util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。

JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同，JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。

下面通过代码来看一下 util.inherits 的用法。

在使用 util 这个模块之前，我们先来看下面这段代码：


 */

// util.js
// function Base() {
//     this.name = 'Base';
//     this.age = 24;
//     this.sayHello = function() {
//         console.log('hello' + this.name);
//     };
// };
// Base.prototype.showName = function() {
//     console.log(this.name);
// };

// function SuperBase() {
//     this.name = 'SuperBase';
// };

// var objBase = new Base();
// objBase.showName(); // Base
// objBase.sayHello(); // helloBase
// console.log(objBase.age); // 24
// console.log(objBase); // Base {name: "Base", age: 24, sayHello: ƒ}

// var objSuperBase = new SuperBase();
// // objSuperBase.showName(); // objSuperBase.showName is not a function
// // objSuperBase.sayHello(); // objSuperBase.name is not a function
// console.log(objSuperBase); // SuperBase {name: "SuperBase"}

/*

上面这段代码中创建了 Base 和 SuperBase 两个构造函数，在 Base 中添加了 name 和 age 两个属性和 sayHello 方法，并在 Base 的原型上添加了 showName 方法，在 SuperBase 中只添加了 name 属性。

接着通过上面两个构造函数创建了两个实例对象 objBase 和 objSuperBase，objBase 可以正常访问到 Base 函数中及原型上的属性和方法，但是 objSuperBase 是无法访问到 sayHello 和 showName 两个方法的。

接下来我们用 Node.js 的 util 模块试一下能否访问到 Base 函数原型上的 showName 方法。


 */

// util.js
// 引入 unit 模块
// const util = require('util');

// function Base() {
//     this.name = 'Base';
//     this.age = '24';
//     this.sayHello = function() {
//         console.log('hello' + this.name);
//     };
// };
// Base.prototype.showName = function() {
//     console.log(this.name);
// };

// function SuperBase() {
//     this.name = 'SuperBase';
// };
// // SuperBase 继承 Base
// util.inherits(SuperBase, Base);

// let objBase = new Base();
// objBase.showName(); // Base
// objBase.sayHello(); // helloBase
// console.log(objBase.age); // 24
// console.log(objBase); // Base { name: 'Base', age: '24', sayHello: [Function] }

// let objSuperBase = new SuperBase();
// objSuperBase.showName(); // SuperBase
// // objSuperBase.sayHello(); // objSuperBase.sayHello is not a function
// console.log(objSuperBase); // SuperBase { name: 'SuperBase' }

/*

通过上面代码可以发现，SuperBase 继承到了 Base 原型上的 sayHello 方法，印证了文章开头说的“util.inherits 是一个实现对象间原型继承的函数”。


### 二、util.inspect

util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出，它至少接受一个参数 object，即要转换的对象。

showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。

depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少，如果不指定 depth，默认会递归 2 层，指定为 null 表示将不限递归层数完整遍历对象。 如果 color 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮的效果。

特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对象定义了 toString 方法也不会调用。


 */

// util.js
// const util = require('util');
// function Person() {
//     this.name = 'Liu';
//     this.toString = function() {
//         return this.name;
//     };
// };
// let obj = new Person();
// console.log(obj); // Person { name: 'Liu', toString: [Function] }
// console.log(util.inspect(obj)); // Person { name: 'Liu', toString: [Function] }
// console.log(util.inspect(obj, true));
/*
执行结果：
Person {
  name: 'Liu',
  toString:
   { [Function]
     [length]: 0,
     [name]: '',
     [arguments]: null,
     [caller]: null,
     [prototype]: { [constructor]: [Circular] } } }
 */


/*

### 三、util.isArray(object)

如果给定的参数 "object" 是一个数组返回true，否则返回false。


 */

// util.js
// const util = require('util');
// console.log(util.isArray([])); // true
// console.log(util.isArray(new Array)); // false
// console.log(util.isArray({})); // false


/*

### 四、util.isRegExp(object)

如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

 */

// util.js
// const util = require('util');
// console.log(util.isRegExp(/some regexp/)); // true
// console.log(util.isRegExp(new RegExp('some regexp'))); // true
// console.log(util.isRegExp({})); // false

/*

### 五、util.isDate(object)

如果给定的参数 "object" 是一个日期返回true，否则返回false。

 */

// util.js
// const util = require('util');
// console.log(util.isDate(new Date())); // true
// console.log(util.isDate(Date())); // false
// console.log(util.isDate({})); // false


/*

### 六、util.isError(object)

如果给定的参数 "object" 是一个错误对象返回true，否则返回false。

 */

// util.js
// const util = require('util');
// console.log(util.isError(new Error())); // true
// console.log(util.isError(new TypeError())); // true
// console.log(util.isError({name: 'error',message: 'error'})); // false