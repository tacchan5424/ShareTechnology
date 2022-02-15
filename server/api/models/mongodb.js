const { MongoClient } = require("mongodb");
const user = "user";
const password = "userPassword";
const dbName = "technology";
const uri = `mongodb+srv://${user}:${password}@cluster0.u0oyz.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//import MongodbAnother from "~/models/mongodbAnother.vue";
const ma = require('./mongodbAnother.js');

class Mongodb {
  constructor() {
    this.db = null;
  }

  async get() {
    // 一度もインスタンス生成されていない場合のみDB接続情報取得
    // リポジトリを分けたことによる動きは要確認
    if (this.db === null) {
      await client
        .connect()
        .then(() => {
          console.log("接続成功");
          this.db = client.db(dbName);
        })
        .catch(async error => {
          this.db = await ma.get();
        });
    }
    return this.db;
  }
}

module.exports = new Mongodb();
