import ballImage from '../assets/images/ball.png';
import './../styles/style.scss'

const answers = [
  "Безперечно",
  "Однозначно так",
  "Ніяких сумнівів",
  "Мені здається - так",
  "Найімовірніше",
  "Гарні перспективи",
  "Поки не ясно, спробуй знову",
  "Запитай пізніше",
  "Краще не розповідати",
  "Навіть не думай",
  "Моя відповідь – «ні»",
  "Перспективи не дуже хороші",
];

const form = document.querySelector(".form");
const question = document.querySelector(".form__input");
const answer = document.querySelector(".ans__text");
const ballImg = document.querySelector(".ans__img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  answer.textContent = "";
  answer.classList.remove("animate-ans")
  ballImg.classList.remove("animate-ball")

  if (question.value.trim() === "") {
    setTimeout(() => {
      answer.classList.add("animate-ans")
      ballImg.classList.add("animate-ball")
      answer.textContent = "Ти ж нічого не спитав";
    })
    return
  }
  
  const currentAnswer = answers[Math.floor(Math.random() * answers.length)]
  setTimeout(() => {
    answer.classList.add("animate-ans")
    ballImg.classList.add("animate-ball")
    answer.textContent = currentAnswer;
  })

})
