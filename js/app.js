import words from "./data.js";

const input = document.getElementById("random_word_input");
const randomWor = document.getElementById("random");
const num = document.getElementById("user__score");
const second = document.getElementById("user__time");
const inputel = document.querySelector("input");
input.focus();

let globalWord;
let count = 0;
let time = 10;

function randomWordGenerator() {
  const randomNum = Math.trunc(Math.random() * words.length);
  randomWor.textContent = words[randomNum];
  globalWord = words[randomNum];
}

randomWordGenerator();

input.addEventListener("input", () => {
  if (input.value == globalWord) {
    randomWordGenerator();
    input.value = "";
    count++;
    num.textContent = count;
  }
  const music = new Audio("./music/sound-2.mp3");
  music.play();
});

const timer = setInterval(() => {
  time--;
  second.textContent = ` ${time}s`;
  if (time == 0) {
    clearInterval(timer);
  }
  changeColor();
}, 1000);

function changeColor() {
  if (time > 10) {
    second.style.color = "green";
  } else if (time < 6) {
    second.style.color = "red";
  } else {
    second.style.color = "gold";
  }
}
// Sekundomerni boshlash uchun funksiya
function startCountdown(duration, display) {
  var timer = duration,
    seconds;

  var interval = setInterval(function () {
    seconds = parseInt(timer % 60, 10);
    display.textContent = seconds;

    if (seconds > 5) {
      document.body.style.backgroundColor = "blue";
      const music = new Audio("./music/sound-2.mp3");
      music.play();
    } else if (seconds > 2) {
      document.body.style.backgroundColor = "orange";
      const music = new Audio("./music/sound-5.mp3");
      music.play();
    } else {
      document.body.style.backgroundColor = "red";
      const music = new Audio("./music/sound-3.mp3");
      music.play();
    }

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "Vaqt tugadi!📳";
      document.body.style.backgroundColor = "white";
    }
  }, 1000);
}

window.onload = function () {
  var tenSeconds = 10,
    display = document.querySelector("#time");
  startCountdown(tenSeconds, display);
};

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

inputel.addEventListener("input", () => {
  const music = new Audio("./music/sound-5.mp3");
  music.play();
});
