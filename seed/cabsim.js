const db = require('../db')
const { Cabsim } = require('../models')

const main = async () => {
    const cabsims = [
        {
            name: "SWRL 8X10",
            mic: "Dynamic 52, Position 2",
            image: "https://ibb.co/5ncmWtR"
        },
        {
            name: "Darkglass 4X12",
            mic: "Dynamic 52, Position 2",
            image: "placehttps://ibb.co/LYHT9q3holder"
        }
    ]
    await Cabsim.deleteMany()
    await Cabsim.insertMany(cabsims)
    console.log('Placed Cabs.') 
}
const run = async () => {
    await main()
    db.close()
}

run()