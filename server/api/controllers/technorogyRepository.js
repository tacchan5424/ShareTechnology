const dbConnection = require("../models/mongodb");

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledFromApi(req) {
  return true;
}

// 技術情報作成
exports.create = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("technorogy").insertOne({
    name: req.name,
    createdAt: req.createdAt,
    updatedAt: req.updatedAt,
    usedCount: req.usedCount
  });
  res.end("呼べたよ");
};

// 技術情報更新
exports.save = async function(req, res) {
  db.collection("technorogy").updateOne(
    { _id: req._id },
    { $set: [{ detail: req.detail }, { fixed: 1 }] }
  );
};

// 技術情報検索(全件検索)
exports.findAll = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("technorogy").find({});
};
