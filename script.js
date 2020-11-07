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
    answer4: "answer4 text"
    },
    {questionText: "question2 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text"
    }, 
    {questionText: "question3 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text"
    }, 
    {questionText: "question4 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text"
    }, 
    {questionText: "question5 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text"
    }, 
    {questionText: "question6 text",
    answer1: "answer1 text",
    answer2: "answer2 text", 
    answer3: "answer3 text", 
    answer4: "answer4 text"
    }
]

var question = document.querySelector(".question");
var answers = Array.from(document.querySelectorAll("#answer-btn"));
var currentQuestion = {};
var questionList = [...questionObjects];

    function setQuestion(){
        var i = Math.floor(Math.random() * questionList.length);
            currentQuestion = questionList[i];
            question.textContent = currentQuestion.questionText;
            questionList.splice(i,1);
        
        answers.forEach(answer => {
            var number = answer.dataset["number"];
            answer.textContent = currentQuestion["answer" + number];
        });
    }
    setQuestion();

    answers.forEach(answer => {
        answer.addEventListener("click", e => {
            var clickedAnswers = e.target;
            var clickedAnswer = clickedAnswers.dataset["number"];
            console.log(clickedAnswer);
            answerClicksCount += 1;
            setQuestion();
        });
    });



