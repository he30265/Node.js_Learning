// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/test";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     // 查询条件
//     var whereStr = {
//         "name": "Sun"
//     };
//     dbo.collection("info_test").deleteOne(whereStr, function(err, res) {
//         if (err) throw err;
//         console.log("数据删除成功！");
//         db.close();
//     });
// });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    // 查询条件
    var whereStr = {
        age: "23"
    };
    dbo.collection("info_test").deleteMany(whereStr, function(err, res) {
        if (err) throw err;
        console.log(res.result.n + " 条文档被删除");
        db.close();
    });
});