const Router = require(`express`).Router()


const CabRouter = require(`./cabsimRouter`)
const OverdriveRouter = require(`./overdriveRouter`)
const ModulationRouter = require(`./modulationRouter`)

Router.use(`/cabsims`, CabRouter)
Router.use(`/overdrives`, OverdriveRouter)
Router.use(`/modulators`, ModulationRouter)

module.exports = Router