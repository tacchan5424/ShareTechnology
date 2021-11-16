module.exports = function(app) {
  const api = require("../controllers/controller");

  app.route("/api/findOne").get(api.createData);
};
