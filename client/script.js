let carousel = document.querySelector(".carousel");
let innerCarousel = document.querySelector(".inner-carousel");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const listen = document.querySelector(".listen");
const scCode = document.querySelector(".scCode");
const userInput = document.querySelector(".userinput");
const here = document.getElementById("here");
let slideWidth;
let currentIndex = 0;

function updateCarousel() {
  slideWidth = innerCarousel.offsetWidth;
  const maxIndex = Math.floor(innerCarousel.scrollWidth / slideWidth) - 1;
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }
  moveCarousel();
}

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  moveCarousel();
});

next.addEventListener("click", () => {
  if (currentIndex < 2) {
    currentIndex++;
  } else if (currentIndex > 2) {
    return;
  }
  moveCarousel();
});

function moveCarousel() {
  const position = -currentIndex * (slideWidth / 4);
  innerCarousel.style.transition = "transform .3s ease-in";
  innerCarousel.style.transform = `translateX(${position}px)`;
}

window.addEventListener("resize", updateCarousel);

updateCarousel();

function removePlayer() {
  const scPlayer = document.querySelector(".scPlayer");
  if (scPlayer) {
    userInput.removeChild(scPlayer);
  }
}

function removeListen() {
  const listen = document.querySelector(".listen");
  if (listen) {
    listen.removeEventListener("click", listenClick);
    listen.parentNode.removeChild(listen);
  }
}
let codes = [];
async function sendcode(card) {
  const responseEffect = await axios.get("/api/effect");
  const responseCabsim = await axios.get("/api/cabsims");
  card.style.boxShadow = "1px 1px #4562ba, inset 0 0 28px #4562ba";
  card.style.animation = "pulse 1s linear infinite";
  console.log(card.id);

  const removeCode = (code) => {
    scCode.value = scCode.value.replace(code, "");
    card.style.boxShadow = "";
    card.style.animation = "";
  };

  
  const addCode = (code) => {
    codes.push(code)
    // scCode.value += code;
  };

  const handleClick = (code, index) => {
    const index = codes.indexOf(code);
    if (index !== -1) {
      codes.splice(index, 1)
      addCode(code)
    } else {
      removeCode(code)
    }
  }
    //   if (!scCode.value.includes(code)) {
  //     addCode(code);
  //   } else {
  //     removeCode(code);
  //   }
  // };
  switch (card.id) {
    case "c1":
      handleClick(responseEffect.data.effects[1].code);
      break;
    case "c2":
      handleClick(responseEffect.data.effects[0].code);
      break;
    case "c3":
      handleClick(responseEffect.data.effects[2].code);
      break;
    case "c4":
      handleClick(responseCabsim.data.cabsims[0].code);
      break;
    case "c5":
      handleClick(responseCabsim.data.cabsims[1].code);
      break;
    default:
      break;
  }
}

function addListen() {
  const listen = document.createElement("BUTTON");
  listen.innerText = "Listen";
  listen.classList.add("listen");
  listen.addEventListener("click", listenClick);
  userInput.appendChild(listen);
}

function listenClick() {
  removePlayer();
  removeListen();
  const getAudioData = async (audioName) => {
    try {
      const response = await axios.get(`/api/audio/name/${audioName}`, {
        responseType: "arraybuffer",
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  let audioPlayer;
  const newAudioPlayer = (audioData) => {
    audioPlayer = document.createElement("audio");
    audioPlayer.src = URL.createObjectURL(new Blob([audioData]));
    audioPlayer.controls = true;
    audioPlayer.classList.add("scPlayer");
    userInput.appendChild(audioPlayer);
  };
  const audioName = codes.join('');
  getAudioData(audioName)
    .then((audioData) => {
      newAudioPlayer(audioData);
    })
    .catch((error) => {
      console.error(error);
    });
  const cards = document.querySelectorAll(".card");
  const clearButton = document.createElement("BUTTON");
  clearButton.classList.add("clear");
  clearButton.innerText = "CLEAR";
  userInput.appendChild(clearButton);
  clearButton.addEventListener("click", () => {
    addListen();
    audioPlayer.remove();
    clearButton.remove();
    scCode.value = "";
    cards.forEach((card) => {
      card.style.boxShadow = "";
      card.style.animation = "";
    });
  });
}

listen.addEventListener("click", listenClick);

here.addEventListener("click", () => {
  const form = document.createElement("div");
  form.setAttribute("id", "form");
  form.classList.add("animatetop");
  document.body.appendChild(form);

  const header = document.createElement("h1");
  header.setAttribute("id", "header");
  header.innerText = "Join our mailing list!";
  form.appendChild(header);

  const name = document.createElement("input");
  name.setAttribute("id", "name");
  name.placeholder = "NAME";
  form.appendChild(name);

  const email = document.createElement("input");
  email.setAttribute("id", "email");
  email.type = "email";
  email.placeholder = "EMAIL";
  form.appendChild(email);

  const comment = document.createElement("input");
  comment.setAttribute("id", "comment");
  comment.placeholder = "YOUR MESSAGE";
  form.appendChild(comment);

  const submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.innerText = "Submit";
  form.appendChild(submit);
  submit.addEventListener("click", async () => {
    const userName = name.value;
    const userEmail = email.value;
    const userComment = comment.value;

    const submission = {
      name: userName,
      email: userEmail,
      comment: userComment,
    };

    try {
      const response = await axios.post("/api/mailinglist", submission);
      const form = document.getElementById("form");
      console.log(response.status);
      if (response.status === 201) {
        console.log("sent");
        const messageRec = document.createElement("div");
        messageRec.setAttribute("id", "rec");
        form.appendChild(messageRec);
        const gotIt = document.createElement("h2");
        gotIt.setAttribute("id", "gotit");
        gotIt.innerText = "Thank you for signing up!";
        messageRec.appendChild(gotIt);

        const x = document.createElement("button");
        x.setAttribute("id", "x");
        x.innerText = "X";
        messageRec.appendChild(x);
        x.addEventListener("click", () => {
          document.body.removeChild(form);
        });
      }
    } catch (error) {
      console.error("error signing up:", error);
    }
  });

  const close = document.createElement("button");
  close.setAttribute("id", "close");
  close.innerText = "x";
  form.appendChild(close);
  close.addEventListener("click", () => {
    document.body.removeChild(form);
  });
});
