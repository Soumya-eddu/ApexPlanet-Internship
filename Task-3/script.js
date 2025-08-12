// ======= Quiz Data & Logic =======
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is the correct way to link a CSS file?",
    options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css link='style.css'>"],
    answer: "<link rel='stylesheet' href='style.css'>"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Sun Microsystems"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;

function loadQuiz() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const result = document.getElementById("result");
  if (selected === correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = `❌ Wrong! Correct answer: ${correct}`;
    result.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuiz();
}

loadQuiz();

// ======= API Joke Fetch =======
async function getJoke() {
  try {
    const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data = await res.json();
    document.getElementById("joke").textContent = `${data.setup} 😂 ${data.punchline}`;
  } catch (error) {
    document.getElementById("joke").textContent = "Oops! Could not fetch joke.";
  }
}
