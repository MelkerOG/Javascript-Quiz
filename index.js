const questions = [
  {
    question: "Sharks are mammals.",
    answer: false,
  },
  {
    question: "The Blue whale is the largest animal in the world.",
    answer: true,
  },
  {
    question: "Herbivores are animal eaters.",
    answer: false,
  },
  {
    question: "Bats are blind.",
    answer: false,
  },
  {
    question: "HTML stands for Hyper Text Markup Language",
    answer: true,
  },
  {
    question: "CSS is a programmig language",
    answer: false,
  },
  {
    question: "JavaScript is a programmig language",
    answer: true,
  },
  {
    question: "Vatican City is the smallest country in the world.",
    answer: true,
  },
  {
    question: "New Zealand has more sheep than people.",
    answer: true,
  },
  {
    question: "Switzerland is part of the European Union",
    answer: false,
  },
];

const questionElement = document.getElementById("question");
const trueBtn = document.querySelector(".trueBtn");
const falseBtn = document.querySelector(".falseBtn");
const nextBtn = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  disableButtons();
}

function disableButtons() {
  trueBtn.disabled = true;
  falseBtn.disabled = true;
  nextBtn.style.display = "block";
}

function enableButtons() {
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  nextBtn.style.display = "none";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    enableButtons();
  } else {
    showResult();
  }
}

function showResult() {
  const percentage = (score / questions.length) * 100;
  questionElement.textContent = `Your score is: ${score}/${
    questions.length
  } (${percentage.toFixed(2)}%)`;
  document.getElementById("true-false-btn").style.display = "none";
  nextBtn.style.display = "none";
}

trueBtn.addEventListener("click", () => checkAnswer(true));
falseBtn.addEventListener("click", () => checkAnswer(false));
nextBtn.addEventListener("click", nextQuestion);

displayQuestion();
