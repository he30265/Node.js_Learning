// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/test";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     // 查询条件
//     var whereStr = {
//         "name": "Liu"
//     };
//     // 修改为：
//     var updateStr = {
//         $set: {
//             "age": "18"
//         }
//     };
//     dbo.collection("info_test").updateOne(whereStr, updateStr, function(err, res) {
//         if (err) throw err;
//         console.log("数据修改成功！");
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
        "age": "18"
    };
    // 修改为：
    var updateStr = {
        $set: {
            "name": "Wang"
        }
    };
    dbo.collection("info_test").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + "条数据修改成功！");
        db.close();
    });
});

