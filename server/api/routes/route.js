module.exports = function(app) {
  const contactApi = require("../controllers/contactRepository");
  const information = require("../controllers/informationRepository");
  const technologyApi = require("../controllers/technorogyRepository");

  app.route("/api/createContact").post(contactApi.create);
  app.route("/api/updateContact").put(contactApi.save);
  app.route("/api/findAllContact").get(contactApi.findAll);

  app.route("/api/createInformation").post(information.create);
  app.route("/api/updateInformation").put(information.save);
  app.route("/api/findAllInformation").get(information.findAll);

  app.route("/api/createTechnology").post(technologyApi.create);
  app.route("/api/updateTechnology").put(technologyApi.save);
  app
    .route("/api/findAllOrderByUpdatedAtDesc")
    .get(technologyApi.findAllOrderByUpdatedAtDesc);
  app
    .route("/api/findLikeByNameOrderByUsedCountDesc")
    .get(technologyApi.findLikeByNameOrderByUsedCountDesc);
  app.route("/api/incrementUserCount").put(technologyApi.increment);
};
