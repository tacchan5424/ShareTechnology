const dbConnection = require("../models/mongodb");
const moment = require("moment");

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledFromApi(req) {
  return true;
}

// 問い合わせ情報作成
exports.create = async function(req, res) {
  const currentTime = moment();
  const db = await dbConnection.get();
  // if (!calledFromApi(req)) {
  //   res.status(404);
  // }
  db.collection("contact").insertOne({
    createdAt: currentTime.format("YYYY/MM/DD HH:mm:ss"),
    tag: req.body.params.tag,
    detail: req.body.params.detail,
    reply: null,
    fixed: 0
  });
  res.end("呼べたよ");
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
