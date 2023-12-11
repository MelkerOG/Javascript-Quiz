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
