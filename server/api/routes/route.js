module.exports = async function(app) {
  const api = require("../controllers/controller");

  app.route("/a").get(api.createData());
};
