const Router = require(`express`).Router()

const CabsimRouter = require(`./cabsimRouter`)
const EffectRouter = require(`./effectRouter`)
const AudioRouter = require(`./audioRouter`)


Router.use(`/cabsims`, CabsimRouter)
Router.use(`/effect`, EffectRouter)
Router.use(`/audio`, AudioRouter)

module.exports = Router