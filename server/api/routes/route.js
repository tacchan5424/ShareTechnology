module.exports = function(app) {
  const api = require("../controllers/repository");

  app.route("/api/createContact").get(api.createContact);
};
