const dbConnection = require("../models/mongodb");
const customHeader = "ShareTechnology";

function calledByService(req) {
  if (req.header("X-Custom-Auth"))
    return req.header("X-Custom-Auth") === customHeader;
}

// 技術情報作成
exports.create = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("technology").insertOne({
    name: req.name,
    createdAt: req.createdAt,
    updatedAt: req.updatedAt,
    usedCount: req.usedCount
  });
  res.end("呼べたよ");
};

// 技術情報更新
exports.save = async function(req, res) {
  db.collection("technology").updateOne(
    { _id: req._id },
    { $set: [{ detail: req.detail }, { fixed: 1 }] }
  );
};

// 技術情報検索(全件検索)
exports.findAll = async function(req, res) {
  if (calledByService(req)) {
    const db = await dbConnection.get();
    const result = await db
      .collection("technology")
      .find()
      .toArray();
    res.send(result);
  } else {
    res.status(404);
    res.end();
  }
};
