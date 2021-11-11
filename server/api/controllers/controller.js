const dbConnection = require("../models/mongodb").get();

// 1件取得

// 全件取得

// 新規作成
exports.createData = function(res, req) {
  console.log("OK");
  dbConnection.collection("technology").insertOne({
    name: "apiテスト",
    age: 11,
    gender: "m",
    hobbies: ["programming"]
  });
  res.send("コールされた");
};

// 更新

// 削除
