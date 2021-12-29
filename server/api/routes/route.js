module.exports = function(app) {
  const contactApi = require("../controllers/contactRepository");
  const technorogyApi = require("../controllers/technorogyRepository");

  app.route("/api/createContact").get(contactApi.create);
  app.route("/api/updateContact").get(contactApi.save);
  app.route("/api/findAllContact").get(contactApi.findAll);

  app.route("/api/createInformation").get(contactApi.create);
  app.route("/api/updateInformation").get(contactApi.save);
  app.route("/api/findAllInformation").get(contactApi.findAll);
};
