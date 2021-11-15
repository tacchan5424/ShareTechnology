const { Nuxt, Builder } = require("nuxt");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let config = require("../nuxt.config");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // DB接続検証
  let DbConnection = null;
  DbConnection = await require("./api/models/mongodb").get();
  // console.log(DbConnection);
  // DbConnection.collection("technology").insertOne({
  //   name: "mr.a",
  //   age: 11,
  //   gender: "m",
  //   hobbies: ["programming"]
  // });

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const routes = require("./api/routes/route"); // Routeのインポート
  routes(app, DbConnection); //appにRouteを設定する

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
