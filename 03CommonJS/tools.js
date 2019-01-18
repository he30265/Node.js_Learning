// 1. 添加工具模块

// 在工具模块中添加两个方法做测试：
const tools = {
    length: (...numbers) => {
        return numbers.length;
    },
    sum: (...numbers) => {
        let sum = 0;
        for (let number in numbers) {
            sum += numbers[number]
        };
        return sum;
    }
};



// 2. 暴露模块

/*
暴露模块的方式有两种：

exports 和 module.exports

区别：

module.exports 是真正的接口，exports 是一个辅助工具。

如果 module.exports 为空，那么所有的 exports 收集到的属性和方法，都赋值给了 module.exports。

如果 module.exports 具有任何属性和方法，则 exports 会被忽略。

- exports 使用方法：

var str = "learning CommonJS";
exports.str = str; // {str: "learning CommonJS"}

- module.exports 使用方法：

暴露出 tools 工具模块，通过 require 导入使用（与 url 模块和 http 模块的引入方式相同）。

 */

module.exports = tools;

// 接下来可以在其他文件中导入该模块并使用。