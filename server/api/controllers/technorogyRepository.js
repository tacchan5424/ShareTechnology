const dbConnection = require("../models/mongodb");

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledFromApi(req) {
  return true;
}

// 技術情報作成
exports.create = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("technorogy").insertOne({
    id: 0,
    name: "vue"
  });
  res.end("呼べたよ");
};
