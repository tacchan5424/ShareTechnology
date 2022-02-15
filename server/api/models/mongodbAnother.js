//const { MongoClient } = require("mongodb");
const user = "user";
const password = "userPassword";
const dbName = "technology";
let collection = null;

var MongoClient = require('mongodb').MongoClient;
var uri = `mongodb://${user}:${password}@cluster0-shard-00-00.u0oyz.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-108gzm-shard-0&authSource=admin&retryWrites=true&w=majority`;
MongoClient.connect(uri, function(err, client) {
  collection = client.db(dbName);
  // perform actions on the collection object
});
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

class MongodbAnother {
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
        .catch(error => {
          throw error;
        });
    }
    return this.db;
  }
}

module.exports = new MongodbAnother();
