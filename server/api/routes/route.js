module.exports = function(app) {
  const contactApi = require("../controllers/contactRepository");
  const information = require("../controllers/informationRepository");
  const technorogyApi = require("../controllers/technorogyRepository");

  app.route("/api/createContact").post(contactApi.create);
  app.route("/api/updateContact").put(contactApi.save);
  app.route("/api/findAllContact").get(contactApi.findAll);

  app.route("/api/createInformation").post(information.create);
  app.route("/api/updateInformation").put(information.save);
  app.route("/api/findAllInformation").get(information.findAll);

  app.route("/api/createTechnology").post(technorogyApi.create);
  app.route("/api/updateTechnology").put(technorogyApi.save);
  app.route("/api/findAllTechnology").get(technorogyApi.findAll);
  app.route("/api/findLikeByNameTechnology").get(technorogyApi.findLikeByName);
};
