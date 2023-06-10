const Router = require(`express`).Router()

const CabsimRouter = require(`./cabsimRouter`)
const EffectRouter = require(`./effectRouter`)


Router.use(`/cabsims`, CabsimRouter)
Router.use(`/effect`, EffectRouter)

module.exports = Router