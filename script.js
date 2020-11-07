var secondsDisplay = document.querySelector("#timer");
var totalSeconds = 100;
var secondsElapsed = 0;
var interval;
var secondsLeft ="";
var answerClicksCount = 0;

    function startTimer() {
        if (secondsElapsed < 100) {
            interval = setInterval(function() {
                secondsElapsed++;
                secondsLeft = (totalSeconds - secondsElapsed);         
                secondsDisplay.textContent = secondsLeft;
                if (secondsElapsed == 100) {
                    clearInterval(interval);
                }
                if (answerClicksCount == 6) {
                    clearInterval(interval);
                }
                console.log(secondsLeft)
            }, 1000);
        };
    }
    startTimer();

var questionObjects = [ 
    {questionText: "question1 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text",
    correctAnswer: 2,
    },
    {questionText: "question2 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text",
    correctAnswer: 4,
    }, 
    {questionText: "question3 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text",
    correctAnswer: 3,
    }, 
    {questionText: "question4 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text",
    correctAnswer: 4,
    }, 
    {questionText: "question5 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text",
    correctAnswer: 1,
    }, 
    {questionText: "question6 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text",
    correctAnswer: 3,
    }
]

var question = document.querySelector(".question");
var answers = Array.from(document.querySelectorAll("#answer-btn"));
var currentQuestion = {};

    function setQuestion(){
        var i = Math.floor(Math.random() * questionObjects.length);
            currentQuestion = questionObjects[i];
            question.textContent = currentQuestion.questionText;
            answers[0].textContent = currentQuestion.answer1;
            answers[1].textContent = currentQuestion.answer2;
            answers[2].textContent = currentQuestion.answer3;
            answers[3].textContent = currentQuestion.answer4;

            questionObjects.splice(i,1);
        
    }
    setQuestion();

    answers.forEach(function(answer) {
        answer.addEventListener("click", function(event) {
            var clickedAnswer = event.target;
            clickedAnswer = clickedAnswer.dataset["number"];
            console.log(clickedAnswer);
            console.log(clickedAnswer == currentQuestion.correctAnswer)
            if (clickedAnswer != currentQuestion.correctAnswer){
                secondsElapsed = secondsElapsed +10;
            }
            answerClicksCount += 1;
            setQuestion();
        });
    });



