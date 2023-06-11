const db = require('../db')
const { Cabsim } = require('../models')

const main = async () => {
    const cabsims = [
        {
            name: "SWRL 8X10",
            code: "C1",
            mic: "Dynamic 52, Position 2",
            image: "https://ibb.co/5ncmWtR"
        },
        {
            name: "Darkglass 4X12",
            code: "C2",
            mic: "Dynamic 52, Position 2",
            image: "https://ibb.co/LYHT9q3"
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