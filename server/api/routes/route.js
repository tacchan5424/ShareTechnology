module.exports = function(app) {
  const api = require("../controllers/repository");

  app.route("/api/findOne").get(api.createData);
};
