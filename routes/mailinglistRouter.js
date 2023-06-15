const Router = require(`express`).Router();
const controller = require(`../controllers/mailinglistController`);

Router.get("/", controller.getAllMessages);
Router.post("/", controller.createMessage);
Router.delete("/", controller.deleteAllMessages);

module.exports = Router;
