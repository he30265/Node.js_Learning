var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    dbo.collection("info_test").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("集合删除成功！");
        db.close();
    });
});