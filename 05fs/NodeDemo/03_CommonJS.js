var http = require("http");

// 导入模块
var tools1 = require("./03_tool_add"); // 不用加 .js 后缀，但一定要在前面加 './'

http.createServer(function(request, response) {

    if (request.url != "/favicon.ico") {
        console.log(tools1.add("d", 2, 3));
        console.log(tools1.sum(2, 3));
    };
    response.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });

    response.write("hello");

    response.end();

}).listen(3000);