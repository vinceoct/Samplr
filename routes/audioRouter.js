const Router = require(`express`).Router();
const controller = require(`../controllers/audioController`);

Router.get("/", controller.getAllAudio);
Router.get("/:id", controller.getAudioById);
Router.get("/name/:value", controller.getAudioByName);

module.exports = Router;
