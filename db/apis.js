/**
 * 現状は都度DBに接続するようになっている。
 * 将来的にはコネクションを使い回すようにしたい。
 */
const find = require("./find.js");
const { MongoClient } = require("mongodb");
// このあたりはHerokuでデプロイするときにうまいことやりたい
const user = "user";
const password = "password";
const dbName = "technology";

const uri = `mongodb+srv://${user}:${password}@cluster0.u0oyz.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(error => {
  const collection = client.db("test").collection("devices");
  // ここにDB処理を記載する？
  console.log("接続成功");
  find.findOne();
  client.close();
});
