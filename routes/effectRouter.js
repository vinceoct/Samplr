const Router = require(`express`).Router()
const controller = require(`../controllers/effectController`)

Router.get('/', controller.getAllEffects)
Router.get('/:id', controller.getEffectsById)
Router.get('/code/:value', controller.getEffectByCode)

module.exports = Router