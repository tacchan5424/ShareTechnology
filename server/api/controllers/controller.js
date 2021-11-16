const dbConnection = require("../models/mongodb");

// 1件取得

// 全件取得

// 新規作成
exports.createData = function(req, res) {
  const db = dbConnection.get();
  console.log(db);
  // db.collection("technology").insertOne({
  //   name: "apiテスト",
  //   age: 11,
  //   gender: "m",
  //   hobbies: ["programming"]
  // });
  res.end("呼べたよ");
};

// 更新

// 削除
