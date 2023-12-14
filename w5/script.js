document.getElementById("hideButton").addEventListener("click", function () {
    document.getElementById("textContent").style.display == "none" ? 
    document.getElementById("textContent").style.display = "block" :
    document.getElementById("textContent").style.display = "none";
});



const card = document.createElement("div");
card.id = "card";

const h2 = document.createElement("h2");
h2.textContent = "Gandalf";
card.appendChild(h2);

const link = document.createElement("a");
link.href = "#";
link.textContent = "Go to profile";
card.appendChild(link);

document.body.appendChild(card);



const questions = [
    {
        question: "What is the capital of France?",
        answers: { a: "Paris", b: "London", c: "Berlin" },
        correctAnswer: "a"
    },
    {
        question: "What is the largest planet in our Solar System?",
        answers: { a: "Jupiter", b: "Saturn", c: "Earth" },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: { a: "William Shakespeare", b: "Charles Dickens", c: "Jane Austen" },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Japan?",
        answers: { a: "Beijing", b: "Seoul", c: "Tokyo" },
        correctAnswer: "c"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: { a: "Gold", b: "Oxygen", c: "Hydrogen" },
        correctAnswer: "b"
    },
    {
        question: "How many continents are there on Earth?",
        answers: { a: "5", b: "6", c: "7" },
        correctAnswer: "c"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: { a: "Vincent Van Gogh", b: "Pablo Picasso", c: "Leonardo da Vinci" },
        correctAnswer: "c"
    },
    {
        question: "In computer science, what does 'CPU' stand for?",
        answers: { a: "Central Processing Unit", b: "Computer Processing Unit", c: "Central Programming Unit" },
        correctAnswer: "a"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: { a: "Steel", b: "Diamond", c: "Quartz" },
        correctAnswer: "b"
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        answers: { a: "Spanish", b: "Portuguese", c: "French" },
        correctAnswer: "b"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("nextButton").addEventListener("click", loadNextQuestion);
document.getElementById("refreshButton").addEventListener("click", refreshQuiz);

function loadQuestion(questionIndex) {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = '';

    const currentQuestion = questions[questionIndex];
    const div = document.createElement("div");
    div.innerHTML = `<p>${currentQuestion.question}</p>`;

    for (const letter in currentQuestion.answers) {
        const button = document.createElement("button");
        button.textContent = currentQuestion.answers[letter];
        button.addEventListener("click", (event) => checkAnswer(questionIndex, letter, event.target));
        div.appendChild(button);
    }

    quizContainer.appendChild(div);
}

function checkAnswer(questionNumber, answer, selectedButton) {
    const isCorrect = answer === questions[questionNumber].correctAnswer;
    if (isCorrect) {
        score++;
        selectedButton.style.backgroundColor = "green";
        document.getElementById("score").textContent = `Score: ${score}`;
    } else {
        selectedButton.style.backgroundColor = "red";
    }

    const buttons = document.querySelectorAll("#quiz button");
    buttons.forEach(button => button.disabled = true);

    setTimeout(loadNextQuestion, 2000);
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        alert("Your score: " + score);
        refreshQuiz();
    }
}

function refreshQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = "Score: 0";
    loadQuestion(currentQuestionIndex);
}

loadQuestion(currentQuestionIndex);
