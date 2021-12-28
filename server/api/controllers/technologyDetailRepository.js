const dbConnection = require("../models/mongodb");

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledFromApi(req) {
  return true;
}

// 技術情報詳細作成
exports.create = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("technorogyDetail").insertOne({
    technologyId: req.technologyId,
    detail: req.detail,
    tags: req.tags,
    createdAt: req.createdAt,
    updatedAt: req.updatedAt,
    links: req.links,
    linkTitles: req.linkTitles
  });
  res.end("呼べたよ");
};

// 技術情報詳細更新
exports.save = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("contact").updateOne(
    { _id: req._id },
    {
      $set: [
        { detail: req.detail },
        { tags: req.tags },
        { links: req.links },
        { linkTitles: req.linkTitles }
      ]
    }
  );
};

// 技術情報詳細検索(全件検索)
exports.findAll = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("technorogyDetail").find({});
};
