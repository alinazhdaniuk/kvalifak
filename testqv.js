const questions = [
    { 
        question: "Що таке комп’ютер?",
        answers: ["Це пристрій для обробки інформації", "Це засіб для приготування їжі", "Це транспортний засіб", "Це музичний інструмент"],
        correct: 0
    },
    // Додайте інші питання тут
    { 
        question: "Яка клавіша на клавіатурі використовується для введення пробілу?",
        answers: ["Shift", "Enter", "Space", "Ctrl"],
        correct: 2
    },
    { 
        question: "Що таке Інтернет?",
        answers: ["Це міжнародна мережа обміну інформацією", "Це засіб для приготування їжі", "Це назва відеоігри", "Це бренд одягу"],
        correct: 0
    },
    { 
        question: "Яка частина комп’ютера обробляє дані?",
        answers: ["Монітор", "Клавіатура", "Процесор", "Миша"],
        correct: 2
    },
    { 
        question: "Що таке операційна система?",
        answers: ["Це комп’ютерна гра", "Це програма для редагування текстів", "Це веб-сайт для пошуку інформації", "Це система програмного забезпечення, що керує апаратними засобами комп’ютера"],
        correct: 3
    },
    { 
        question: "Що таке програмування?",
        answers: ["Це процес приготування їжі", "Це процес створення комп’ютерних програм", "Це процес малювання", "Це процес гри в ігри"],
        correct: 1
    },
    { 
        question: "Яка програма використовується для перегляду відео?",
        answers: ["Microsoft Word", "Excel", "Media Player"],
        correct: 2
    },
    { 
        question: "Що таке миша?",
        answers: ["Це тварина", "Це пристрій для введення даних у комп’ютер", "Це частина клавіатури", "Це частина монітора"],
        correct: 1
    },
    { 
        question: "Яка клавіша використовується для видалення символу зліва від курсора?",
        answers: ["Enter", "Shift", "Backspace", "Tab"],
        correct: 2
    },
    { 
        question: "Яка програма використовується для написання текстів?",
        answers: ["Paint", "Microsoft Word", "Calculator", "Photoshop"],
        correct: 1
    },
    { 
        question: "Що таке електронна пошта?",
        answers: ["Це засіб для обміну текстовими повідомленнями через Інтернет", "Це пристрій для друку", "Це програма для малювання", "Це гра"],
        correct: 0
    },
    { 
        question: "Що таке веб-браузер?",
        answers: ["Це програма для перегляду веб-сайтів в Інтернеті", "Це пристрій для зберігання даних", "Це комп’ютерна гра", "Це операційна система"],
        correct: 0
    },
];
let currentQuestion = 0;
let score = 0;

const welcomePage = document.getElementById("welcome-page");
const testPage = document.getElementById("test-page");
const resultPage = document.getElementById("result-page");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");

function startTest() {
    welcomePage.classList.add("hidden");
    testPage.classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.classList.remove("fade-in");
    questionElement.classList.add("fade-out");
    setTimeout(() => {
        questionElement.textContent = q.question;
        answersElement.innerHTML = "";
        q.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.onclick = () => checkAnswer(index);
            button.style.opacity = "0"; // Початкове значення прозорості
            answersElement.appendChild(button);
            // Плавне з'явлення варіантів відповідей
            setTimeout(() => {
                button.style.opacity = "1";
            }, 100 * index); // Затримка для кожної кнопки
        });
        questionElement.classList.remove("fade-out");
        questionElement.classList.add("fade-in");
    }, 500); // Затримка у 0.5 секунди для плавності
}

function checkAnswer(index) {
    const q = questions[currentQuestion];
    if (index === q.correct) {
        score++;
        // Зелений колір при правильній відповіді
        answersElement.childNodes[index].classList.add("correct");
    } else {
        // Червоний колір при неправильній відповіді
        answersElement.childNodes[index].classList.add("incorrect");
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        // Затримка перед показом наступного питання
        setTimeout(() => {
            showQuestion();
        }, 500); // Затримка у 0.5 секунди для плавності
    } else {
        showResult();
    }
}

function showResult() {
    testPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
    const resultText = `Ваш результат: ${score}/${questions.length}`;
    scoreElement.textContent = resultText;
    // Плавне з'явлення результатів
    resultPage.style.opacity = '0';
    resultPage.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        resultPage.style.opacity = '1';
    }, 500); // Затримка для плавності
}

function restartTest() {
    currentQuestion = 0;
    score = 0;
    resultPage.classList.add("hidden");
    welcomePage.classList.remove("hidden");
}

function backToHome() {
    restartTest();
}
