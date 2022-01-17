module.exports = function(app) {
  const contactApi = require("../controllers/contactRepository");
  const technorogyApi = require("../controllers/technorogyRepository");

  app.route("/api/createContact").post(contactApi.create);
  app.route("/api/updateContact").put(contactApi.save);
  app.route("/api/findAllContact").get(contactApi.findAll);

  app.route("/api/createInformation").post(contactApi.create);
  app.route("/api/updateInformation").put(contactApi.save);
  app.route("/api/findAllInformation").get(contactApi.findAll);
};
