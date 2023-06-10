const db = require('../db')
const fs = require('fs').promises
const  { Audio }   = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
    const filePaths = [
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1B3K.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1B3KC1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1B3KC2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1B3KOCT.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1B3KOCTC1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1B3KOCTC2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1CAB1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1CAB2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1CLEAN.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1OCT-C1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1OCT-C2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1OCT.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBE-C1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBE-C2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBE.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEB3K-C1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEB3K-C2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEB3K.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEB3KOCT-C1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEB3KOCT-C2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEB3KOCT.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEOCT-C1.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEOCT-C2.mp3',
        '/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/1TUBEOCT.mp3'    
    ]

    try {
        await Audio.deleteMany()
        console.log('deleted audio')
        for (const filePath of filePaths) {
            const data = await fs.readFile(filePath) 
            
            const audio = new Audio({
                name: filePath.split('/').pop(),
                data: data,
            })
        
            const savedAudio = await audio.save()
            console.log('saved audio')
        }
    } catch (err) {
        console.error(err)
       }
    }

const run = async () => {
    await main()
    await db.close()
}

run()