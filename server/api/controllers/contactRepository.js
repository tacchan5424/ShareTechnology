const dbConnection = require("../models/mongodb");
const moment = require("moment");
const ObjectId = require("mongodb").ObjectID;

// TODO:画面遷移でコールされた場合は404を返してエラーページを出力する
function calledByService(req) {
  if (req.header("X-Custom-Auth"))
    return req.header("X-Custom-Auth") === process.env.CUSTOM_HEADER;
}

// 問い合わせ情報作成
exports.create = async function(req, res) {
  if (calledByService(req)) {
    const currentTime = moment();
    const db = await dbConnection.get();
    const contact = req.body.contact;
    db.collection("contact").insertOne({
      createdAt: currentTime.format("YYYY/MM/DD HH:mm:ss"),
      updatedAt: null,
      tag: contact.tag,
      detail: contact.detail,
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

// 問い合わせ情報検索(リプライ無し)
exports.findByNotFixed = async function(req, res) {
  if (calledByService(req)) {
    const db = await dbConnection.get();
    const result = await db
      .collection("contact")
      .find({ fixed: 0 })
      .limit(50)
      .toArray();
    res.send(result);
  } else {
    res.status(404);
    res.end();
  }
};

// 問い合わせfix
exports.fixContact = async function(req, res) {
  if (calledByService(req)) {
    console.log(req.body.id);
    const db = await dbConnection.get();
    const contactId = req.body.id;
    db.collection("contact").updateOne(
      { _id: ObjectId(contactId) },
      {
        $set: {
          fixed: 1
        }
      }
    );
    res.end();
  } else {
    res.status(404);
    res.end();
  }
};
