const Router = require(`express`).Router()
const controller = require(`../controllers/cabsimController`)

Router.get('/', controller.getAllCabsims)
Router.get('/:id', controller.getCabsimById)

module.exports = Router