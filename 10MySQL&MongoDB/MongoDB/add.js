// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/test";
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("test");
//     var user = {
//         name: "Liu",
//         age: "24"
//     };
//     dbo.collection("info_test").insertOne(user, function(err, res) {
//         if (err) throw err;
//         console.log("数据插入成功！");
//         db.close();
//     });
// });

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var user = [{
        name: "Zhao",
        age: "23",
    }, {
        name: "Sun",
        age: "18"
    }, {
        name: "Du",
        age: "23"
    }];
    dbo.collection("info_test").insertMany(user, function(err, res) {
        if (err) throw err;
        console.log("插入" + res.insertedCount + "条数据成功！");
        db.close();
    });
});