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
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // apiのルーティング設定
  const routes = require("./api/routes/route");
  routes(app);

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
