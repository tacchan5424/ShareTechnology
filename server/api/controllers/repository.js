const dbConnection = require("../models/mongodb");

function calledFromApi(req) {
  return true;
}

// 1件取得

// 全件取得

// 新規作成
// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
exports.createData = function(req, res) {
  const db = dbConnection.get();
  if (!calledFromApi(req)) {
    res.status(404);
  }
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
