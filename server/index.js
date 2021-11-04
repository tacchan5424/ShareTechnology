const { Nuxt, Builder } = require("nuxt");
const express = require("express");
const app = express();

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
  await require("./mongodb.js")
    .then(res => {
      DbConnection = res;
    })
    .catch(error => {
      console.log(error);
    });
  // DbConnection.collection("technology").insertOne({
  //   name: "mr.a",
  //   age: 11,
  //   gender: "m",
  //   hobbies: ["programming"]
  // });

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
