const dbConnection = require("../models/mongodb");

function calledByService(req) {
  if (req.header("X-Custom-Auth"))
    return req.header("X-Custom-Auth") === process.env.CUSTOM_HEADER;
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

// 問い合わせ検索
exports.findInformation = async function(req, res) {
  if (calledByService(req)) {
    const db = await dbConnection.get();
    // 更新日の降順でソート
    const result = await db
      .collection("information")
      .find()
      .limit(10)
      .sort({ createdAt: -1 })
      .toArray();

    res.send(result);
  } else {
    res.status(404);
    res.end();
  }
};
