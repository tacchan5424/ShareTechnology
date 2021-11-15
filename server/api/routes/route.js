module.exports = function(app, db) {
  const api = require("../controllers/controller");

  app.route("/a").get(api.createData(db, app.request, app.response));
};
