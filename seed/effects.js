const db = require('../db')
const { Effect } = require('../models')

const main = async () => {
    const effects = [
        {
            name: "Darkglass B3K", 
            description: "A defined and powerful overdrive, with a simple layout, it sets no boundaries or rules to unleashing the desired tone.",
            settings: "Blend, Level, Tone, Drive",
            image: "https://ibb.co/y5JD0Jw",
        },
        {
            name: "Leo Bass", 
            description: "Clean American tube preamp with 3-band equalizer and volume controls",
            settings: "Volume, Master, Treble, Middle, Bass",
            image: "https://ibb.co/8xD7JQ2",
        },
        {
            name: "Sublime Octaver", 
            description: "A modern monophonic octaver with one octave down.",
            settings: "Octave Level, Clean Level, Filter Cutoff",
            image: "https://ibb.co/rd7xLp2",
        },
    ]
    await Effect.deleteMany()
    await Effect.insertMany(effects)
    console.log('Placed Effects.') 
}
const run = async () => {
    await main()
    db.close()
}

run()