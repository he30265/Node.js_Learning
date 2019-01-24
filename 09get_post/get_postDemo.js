/*

### 三、get 与 post 实例

 */

// get_postDemo.js
const http = require('http');
// 虚拟 SQL 读取出来的数据
let items = [];
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
    // 设置跨域的域名，* 代表允许任意域名跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置 header 类型
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // 跨域允许的请求方式
    response.setHeader('Content-Type', 'application/json');

    // 判断请求
    switch (request.method) {
        // post 请求时，浏览器会先发一次 options 请求，如果请求通过，则继续发送正式的 post 请求
        case 'OPTIONS':
            response.statusCode = 200;
            response.end();
            break;
            // 如果是 get 请求，则直接返回 items 数组
        case 'GET':
            let data = JSON.stringify(items);
            response.write(data);
            response.end();
            break;
            // 如果是 post 请求
        case 'POST':
            let item = '';
            // 读取每次发送的数据
            request.on('data', function(chunk) {
                item += chunk;
            });
            // 数据发送完成
            request.on('end', function() {
                // 存入
                item = JSON.parse(item);
                items.push(item.item);
                // 将数据返回到客户端
                let data = JSON.stringify(items);
                response.write(data);
                response.end();
            });
            break;
    };
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}`);
});

/*

上面代码首先加载了 http 模块，并创建了服务，然后设置了跨域的处理方式，允许进行跨域，接着进行了请求的判断处理，在这个简单的示例中只做了 get 和 post 两种判断，最后，将请求结果返回客户端。

以上是后端 Node.js 的部署，那么前端页面要怎么做呢？

新建 get_postDemo.html 文件，通过 Vue 对页面进行了布局，通过 Axios 进行了接口的请求，从而完成了对数据的操作。

get_postDemo.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GET&POST</title>
</head>
<body>

<div id="app">
    <h1>Todo List</h1>
    <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <input type="text" v-model="item">
    <button @click="postApi">添加</button>
</div>

<!-- 引用 vue 和 axios -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
var vm = new Vue({
    el: '#app',
    data: function() {
        return {
            items: [],
            item: '',
        };
    },
    created() {
        // 进入页面请求数据
        axios.get('http://127.0.0.1:3000/').then(response => {
            console.log('\n 【API - get 数据】');
            console.log(response);
            this.items = response.data;
        }).catch(function(err) {
            console.log(err);
        });
    },
    methods: {
        // 点击按钮提交数据
        postApi() {
            axios.post('http://127.0.0.1:3000/', {
                item: this.item
            }).then(response => {
                console.log('\n 【API - get 数据】');
                console.log(response);
                this.items = response.data;
            }).catch(function(err) {
                console.log(err);
            });
        }
    }
});
</script>


</body>
</html>
```

浏览器打开 get_postDemo.html，添加几条数据。

![](https://upload-images.jianshu.io/upload_images/9373308-8a8af8bc973f522d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

刷新 127.0.0.1:3000，可以看到数据已经提交上去。

![](https://upload-images.jianshu.io/upload_images/9373308-8130c55c78feb982.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



 */