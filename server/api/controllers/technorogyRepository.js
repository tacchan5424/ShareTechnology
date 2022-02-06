const dbConnection = require("../models/mongodb");
const moment = require("moment");
const customHeader = "ShareTechnology";

function calledByService(req) {
  if (req.header("X-Custom-Auth"))
    return req.header("X-Custom-Auth") === customHeader;
}

// 技術情報作成
exports.create = async function(req, res) {
  if (calledByService(req)) {
    const currentTime = moment();
    const db = await dbConnection.get();
    const technology = req.body.technology;
    db.collection("technology").insertOne({
      name: req.name,
      createdAt: currentTime.format("YYYY/MM/DD HH:mm:ss"),
      updatedAt: null,
      name: technology.name,
      detail: technology.detail,
      tags: technology.tags,
      linkTitles: technology.linkTitles,
      links: technology.links,
      usedCount: 0
    });
    res.end();
  } else {
    res.status(404);
    res.end();
  }
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

// nameに対してlike検索
exports.findLikeByName = async function(req, res) {
  if (calledByService(req)) {
    const db = await dbConnection.get();
    // ひとまず1単語のみ検索
    const result = await db
      .collection("technology")
      .find({ name: { $regex: req.query.query, $options: "i" } })
      .limit(50)
      .toArray();
    res.send(result);
  } else {
    res.status(404);
    res.end();
  }
};
