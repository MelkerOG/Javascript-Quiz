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

let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images /sun.png";
  } else {
    icon.src = "./images /moon.png";
  }
};

const questionElement = document.getElementById("question");
const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");
const nextBtn = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
    resultElement.textContent = "Correct!";
    resultElement.style.color = "rgb(57, 255, 20)";
  } else {
    resultElement.textContent = "Incorrect!";
    resultElement.style.color = "red";
  }

  // const selectedButton = answer ? trueBtn : falseBtn;
  // selectedButton.classList.add("selected");

  trueBtn.disabled = true;
  falseBtn.disabled = true;
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    resultElement.textContent = "";
    trueBtn.disabled = false;
    falseBtn.disabled = false;
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
}

function showResult() {
  // questionElement.textContent = `Quiz completed! Your score is: ${score}/${questions.length}`;

  const percentage = (score / questions.length) * 100;

  if (percentage >= 75) {
    questionElement.textContent = `Well done! You scored is: ${score}/${questions.length}`;
    questionElement.style.color = "green";
  } else if (percentage >= 50) {
    questionElement.textContent = `You passed, barely.. You scored is: ${score}/${questions.length}`;
    questionElement.style.color = "orange";
  } else {
    questionElement.textContent = `Failed. You scored is: ${score}/${questions.length}`;
    questionElement.style.color = "red";
  }

  trueBtn.style.display = "none";
  falseBtn.style.display = "none";
  resultElement.textContent = "";
  nextBtn.style.display = "none";
}

trueBtn.addEventListener("click", () => checkAnswer(true));
falseBtn.addEventListener("click", () => checkAnswer(false));
nextBtn.addEventListener("click", nextQuestion);

displayQuestion();

function resetQuiz() {
  currentQuestion = 0;
  score = 0;

  displayQuestion();
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  resultElement.textContent = "";
  trueBtn.classList.remove("selected");
  falseBtn.classList.remove("selected");
  nextBtn.style.display = "none";
}

resetBtn.addEventListener("click", resetQuiz);
