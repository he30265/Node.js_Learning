// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/test";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     // 查询所有数据
//     dbo.collection("info_test").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
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
    }
    dbo.collection("info_test").find(whereStr).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});