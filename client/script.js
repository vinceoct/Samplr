
let carousel = document.querySelector('.carousel')
let innerCarousel = document.querySelector('.inner-carousel')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const test = document.querySelector('.test')
let slideWidth 
let currentIndex = 0

function updateCarousel() {
    slideWidth = innerCarousel.offsetWidth
    const maxIndex = Math.floor(innerCarousel.scrollWidth / slideWidth) - 1
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex
    }
    moveCarousel()
}

prev.addEventListener('click', () => {
        currentIndex--
        if (currentIndex < 0) {
            currentIndex = 0
        }
        moveCarousel()
})

next.addEventListener('click', () => {
    if (currentIndex < 2) {
    currentIndex++
    } else if (currentIndex > 2) {
        return;
    }
    moveCarousel()
})

function moveCarousel() {
    const position = -currentIndex * (slideWidth / 4)
    innerCarousel.style.transition = 'transform 1s ease-in'
    innerCarousel.style.transform = `translateX(${position}px)`;
  }

window.addEventListener('resize', updateCarousel)

updateCarousel()

test.addEventListener('click', async() => {
    const getAudioData = async (audioId) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/audio/${audioId}`, {responseType: 'arraybuffer'})
        return response.data
    } catch (error) {
      console.error(error)        
    }
}
    const newAudioPlayer = (audioData) => {
        const audioPlayer = document.createElement('audio')
        audioPlayer.src = URL.createObjectURL(new Blob([audioData]))
        audioPlayer.controls = true
        document.body.appendChild(audioPlayer)
    }
    const audioId = '6484b9e1992392f0918d3afa'
    getAudioData(audioId)
        .then((audioData) => {
            newAudioPlayer(audioData)
        }) 
        .catch((error) => {
            console.error(error)
        })
})