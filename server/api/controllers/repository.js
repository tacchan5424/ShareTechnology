const dbConnection = require("../models/mongodb");

function calledFromApi(req) {
  return true;
}

// 1件取得

// 全件取得

// 新規作成
// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
exports.createContact = async function(req, res) {
  const db = await dbConnection.get();
  // if (!calledFromApi(req)) {
  //   res.status(404);
  // }
  db.collection("contact").insertOne({
    id: 0,
    tag: "バグ報告",
    detail: "障害発生"
  });
  res.end("呼べたよ");
};

// 更新

// 削除
