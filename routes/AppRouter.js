const Router = require(`express`).Router()


const CabRouter = require(`./cabsimRouter`)
const EffectRouter = require(`./effectRouter`)


Router.use(`/cabsims`, CabRouter)
Router.use(`/effect`, EffectRouter)

module.exports = Router