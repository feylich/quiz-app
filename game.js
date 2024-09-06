const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "In which year did Swansea City FC first gain promotion to the premier league?",
        choice1: "2008",
        choice2: "2010",
        choice3: "2011",
        choice4: "2012",
        answer: 3
    },
    {
        question: "Which player holds the record for most league appearances for Swansea City FC?",
        choice1: "Wilf Milne",
        choice2: "Leon Britton",
        choice3: "Alan Curtis",
        choice4: "Ivor Allchurch",
        answer: 1
    },
    {
        question: "Who was Swansea's manager when they won the EFL Cup in 2013?",
        choice1: "Roberto Martinez",
        choice2: "Brendan Rogers",
        choice3: "Michael Laudrup",
        choice4: "Garry Monk",
        answer: 3
    },
    {
        question: "In what year was Swansea City FC (then Swansea Town) founded?",
        choice1: "1897",
        choice2: "1902",
        choice3: "1907",
        choice4: "1912",
        answer: 4
    }
]

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/end.html");
    };

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;  //first question is html tag id, second is key in currentQuestion object

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestion()
    });
});

startGame();