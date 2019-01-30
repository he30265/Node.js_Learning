var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    // 排序条件
    var mySort = {
        "age": 1
    }
    dbo.collection("info_test").find().sort(mySort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});