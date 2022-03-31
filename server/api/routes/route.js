module.exports = function(app) {
  const contactApi = require("../controllers/contactRepository");
  const information = require("../controllers/informationRepository");
  const technologyApi = require("../controllers/technorogyRepository");

  app.route("/api/createContact").post(contactApi.create);
  app.route("/api/updateContact").put(contactApi.save);
  app.route("/api/findContactByNotFixed").get(contactApi.findByNotFixed);
  app.route("/api/fixContact").put(contactApi.fixContact);

  app.route("/api/createInformation").post(information.create);
  app.route("/api/updateInformation").put(information.save);
  app.route("/api/findInformation").get(information.findInformation);

  app.route("/api/createTechnology").post(technologyApi.create);
  app.route("/api/updateTechnology").put(technologyApi.save);
  app
    .route("/api/findAllOrderByUpdatedAtDesc")
    .get(technologyApi.findAllOrderByUpdatedAtDesc);
  app
    .route("/api/findLikeByNameOrderByUpdatedAtDesc")
    .get(technologyApi.findLikeByNameOrderByUpdatedAtDesc);
  app.route("/api/incrementUserCount").put(technologyApi.increment);
  app.route("/api/findOne").get(technologyApi.findOne);
};
