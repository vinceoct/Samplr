const Router = require(`express`).Router()
const controller = require(`../controllers/driveController`)

Router.get('/', controller.getallOverdrives)

module.exports = Router