const db = require('../db')
const { Effect } = require('../models')

const main = async () => {
    const effects = [
        {
            name: "Darkglass B3K", 
            description: "A defined and powerful overdrive, with a simple layout, it sets no boundaries or rules to unleashing the desired tone.",
            settings: "Blend: 3 o'clock, Level: 9 o'clock, Tone: 12 o'clock, Drive: 2 o'clock",
            image: "placeholder",
        },
        {
            name: "Leo Bass", 
            description: "Clean American tube preamp with 3-band equalizer and volume controls",
            settings: "Volume: 6, Master: 5, Treble: 6.5, Middle: 6.5, Bass: 6.5",
            image: "placeholder",
        },
        {
            name: "Sublime Octaver", 
            description: "A modern monophonic octaver with one octave down.",
            settings: "Octave Level: o'clock, Clean Level: o'clock, Filter Cutoff: o'clock",
            image: "placeholder",
        },
        {
            name: "Hall Reverb", 
            description: "Hall Reverb. Add massive space to your sound",
            settings: "Dry: o'clock, Wet: o'clock, Decay: o'clock, Damping: 2 o'clock, Lo Cut: o'clock, Hi Cut: o'clock.",
            image: "placeholder",
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