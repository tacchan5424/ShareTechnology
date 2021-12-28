const dbConnection = require("../models/mongodb");

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledFromApi(req) {
  return true;
}

// 技術情報検索(全件検索)
exports.findAll = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("admin").find({});
};
