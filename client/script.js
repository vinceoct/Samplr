
let carousel = document.querySelector('.carousel')
let innerCarousel = document.querySelector('.inner-carousel')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const test = document.querySelector('.test')
const scCode = document.querySelector('.scCode')
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
    innerCarousel.style.transition = 'transform .3s ease-in'
    innerCarousel.style.transform = `translateX(${position}px)`;
  }

window.addEventListener('resize', updateCarousel)

updateCarousel()

function removePlayer() {
    const SCPlayer = document.querySelector('.SCPlayer')
    if (SCPlayer) {
    SCPlayer.parentNode.removeChild(SCPlayer)
}
}  

async function sendcode(card) {
    const responseEffect = await axios.get('http://localhost:3001/api/effect')
    const responseCabsim = await axios.get('http://localhost:3001/api/cabsims')      
    if (card.id === 'c1') {
        scCode.value += responseEffect.data.effects[1].code
    }else if(card.id === 'c2') {
        scCode.value += responseEffect.data.effects[0].code
    }else if(card.id === 'c3') {
        scCode.value += responseEffect.data.effects[2].code
    }else if(card.id === 'c4') {
        scCode.value += responseCabsim.data.cabsims[0].code
    }else if(card.id === 'c5') {
        scCode.value += responseCabsim.data.cabsims[1].code
    }
          
 }




test.addEventListener('click', async() => {
    removePlayer()
    const getAudioData = async (audioName) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/audio/name/${audioName}`, {responseType: 'arraybuffer'})
        return response.data
    } catch (error) {
      console.error(error)        
    }
}
    const newAudioPlayer = (audioData) => {
        const audioPlayer = document.createElement('audio')
        audioPlayer.src = URL.createObjectURL(new Blob([audioData]))
        audioPlayer.controls = true
        audioPlayer.classList.add("SCPlayer")
        document.body.appendChild(audioPlayer)
    }
    const audioName = scCode.value
    getAudioData(audioName)
        .then((audioData) => {
            newAudioPlayer(audioData)
        }) 
        .catch((error) => {
            console.error(error)
        })
})