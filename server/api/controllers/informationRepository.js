const dbConnection = require("../models/mongodb");

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledFromApi(req) {
  return true;
}

// 問い合わせ作成
exports.create = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("information").insertOne({
    detail: req.detail
  });
};

// 問い合わせ更新
exports.save = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("information").updateOne(
    { _id: req._id },
    { $set: { detail: req.detail } }
  );
};

// 問い合わせ検索(全件検索)
exports.findAll = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("information").find({});
};
