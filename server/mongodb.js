const { MongoClient } = require("mongodb");

const DbConnection = function() {
  const user = "user";
  const password = "userPassword";
  const dbName = "technology";
  const uri = `mongodb+srv://${user}:${password}@cluster0.u0oyz.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  let db = null;

  async function dbConnect() {
    await client
      .connect()
      .then(() => {
        console.log("接続成功");
        db = client.db(dbName);
      })
      .catch(error => {
        throw error;
      });
  }

  async function getConnection() {
    if (db != null) {
      console.log(`db connection is already alive`);
      return db;
    } else {
      console.log(`getting new db connection`);
      // 待たせる
      await dbConnect();
      return db;
    }
  }

  return getConnection();
};

module.exports = DbConnection();
