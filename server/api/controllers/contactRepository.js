const dbConnection = require("../models/mongodb");
const moment = require("moment");
const customHeader = "ShareTechnology";
const Contact = require("../models/contact");

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledByService(req) {
  if (req.header("X-Custom-Auth"))
    return req.header("X-Custom-Auth") === customHeader;
}

// 問い合わせ情報作成
exports.create = async function(req, res) {
  if (calledByService(req)) {
    const currentTime = moment();
    const db = await dbConnection.get();
    db.collection("contact").insertOne({
      createdAt: currentTime.format("YYYY/MM/DD HH:mm:ss"),
      updatedAt: null,
      tag: req.body.params.tag,
      detail: req.body.params.detail,
      reply: null,
      fixed: 0
    });
    res.end();
  } else {
    res.status(404);
    res.end();
  }
};

// 問い合わせ更新
exports.save = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("contact").updateOne(
    { _id: req._id },
    {
      $set: [{ detail: req.detail }, { fixed: 1 }]
    }
  );
};

// 問い合わせ情報検索(全件検索)
exports.findAll = async function(req, res) {
  const db = await dbConnection.get();
  db.collection("contact").find({});
  res.end("呼べたよ");
};
