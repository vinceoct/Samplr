const Router = require(`express`).Router()
const controller = require(`../controllers/audioController`)

Router.get('/', controller.getAllAudio)
Router.get('/:id', controller.getAudioById)

module.exports = Router