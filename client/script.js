
let carousel = document.querySelector('.carousel')
let innerCarousel = document.querySelector('.inner-carousel')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const test = document.querySelector('.test')
const scCode = document.querySelector('.scCode')
const userInput = document.querySelector('.userinput')
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
    const scPlayer = document.querySelector('.scPlayer')
    if (scPlayer) {
    userInput.removeChild(scPlayer)
}
}  

async function sendcode(card) {
    const value = scCode.value
    const responseEffect = await axios.get('http://localhost:3001/api/effect')
    const responseCabsim = await axios.get('http://localhost:3001/api/cabsims')      
    card.style.boxShadow = "0 0 8px green, inset 0 0 8px green"
    card.style.animation = "pulse 1s linear 1s infinite"
    console.log(card.id)
    
    const removeCode = (code) => {
        scCode.value = scCode.value.replace(code, '');
        card.style.boxShadow = '';
        card.style.animation = '';
      }

    const addCode = (code) => {
        scCode.value += code;
      }
    
      const handleClick = (code, index) => {
        if (!scCode.value.includes(code)) {
          addCode(code);
        } else {
          removeCode(code);
        }
      }
    switch (card.id) {
    case 'c1':
        handleClick(responseEffect.data.effects[1].code);
        break;
    case 'c2':
        handleClick(responseEffect.data.effects[0].code);
        break;
    case 'c3':
        handleClick(responseEffect.data.effects[2].code);
        break;
    case 'c4':
        handleClick(responseCabsim.data.cabsims[0].code);
        break;
    case 'c5':
        handleClick(responseCabsim.data.cabsims[1].code);
        break;
    default:
        break;
    }

}

const button = document.createElement('BUTTON')



test.addEventListener('click', async() => {

    const getAudioData = async (audioName) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/audio/name/${audioName}`, {responseType: 'arraybuffer'})
        return response.data
    } catch (error) {
      console.error(error)        
    }
}
    let audioPlayer
    const newAudioPlayer = (audioData) => {
        audioPlayer = document.createElement('audio')
        audioPlayer.src = URL.createObjectURL(new Blob([audioData]))
        audioPlayer.controls = true
        audioPlayer.classList.add("scPlayer")
        userInput.appendChild(audioPlayer)
    }
    const audioName = scCode.value
    getAudioData(audioName)
        .then((audioData) => {
            newAudioPlayer(audioData)
        }) 
        .catch((error) => {
            console.error(error)
        })
    const cards = document.querySelectorAll('.card')
    const clearButton = document.createElement('BUTTON')
        clearButton.classList.add('clear')
        clearButton.innerText = "RESET"
        userInput.appendChild(clearButton)
        clearButton.addEventListener('click', () => {
            audioPlayer.remove()
            clearButton.remove()
            scCode.value = ''
        cards.forEach((card) => {
            card.style.boxShadow = ""
            card.style.animation = ""
        })
    })
})