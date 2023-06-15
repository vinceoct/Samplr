const db = require("../db");
const fs = require("fs").promises;
const { Audio } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const filePaths = [
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/B3K.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/B3KC1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/B3KC2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/B3KOCT.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/B3KOCTC1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/B3KOCTC2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/C1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/C2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/CLEAN.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/OCTC1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/OCTC2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/OCT.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEC1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEC2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBE.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEB3KC1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEB3KC2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEB3K.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEB3KOCTC1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEB3KOCTC2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEB3KOCT.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEOCTC1.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEOCTC2.mp3",
    "/Users/vincentvullo/Desktop/e500-Sampler/assets/audiofiles/TUBEOCT.mp3",
  ];

  try {
    await Audio.deleteMany();
    console.log("deleted audio");
    for (const filePath of filePaths) {
      const data = await fs.readFile(filePath);

      const audio = new Audio({
        name: filePath.split("/").pop().replace(".mp3", ""),
        data: data,
      });

      const savedAudio = await audio.save();
      console.log("saved audio");
    }
  } catch (err) {
    console.error(err);
  }
};

const run = async () => {
  await main();
  await db.close();
};

run();
