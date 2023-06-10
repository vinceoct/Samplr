const Router = require(`express`).Router()
const controller = require(`../controllers/effectController`)

Router.get('/', controller.getAllEffects)
Router.get('/:id', controller.getEffectsById)

module.exports = Router