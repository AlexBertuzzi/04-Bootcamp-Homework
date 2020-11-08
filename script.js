var secondsDisplay = document.querySelector("#timer");
var totalSeconds = 100;
var secondsElapsed = 0;
var interval;
var secondsLeft ="";
var answerClicksCount = 0;
var scoreDisplay = document.querySelector("#scoreDisplay")
var yourScore = localStorage.getItem("yourScore");
var score = 0;
    
//The startTimer function sets the countdown clock and displays secondsLeft which is
//calculated by subtracting secondsElapsed from the totalSeconds. I use if statements to 
//set the interval, clear the interval if secondsLeft=0 or all questions have been answerd,
//and then load the highscores page.
    function startTimer() {
        if (secondsElapsed < 100) {
            interval = setInterval(function() {
                secondsElapsed++;
                secondsLeft = (totalSeconds - secondsElapsed);         
                secondsDisplay.textContent = secondsLeft;
                if (secondsElapsed == 100) {
                    clearInterval(interval)
                    return window.location.assign("highscores.html")
                }
                if (answerClicksCount == 6) {
                    clearInterval(interval)
                    return window.location.assign("highscores.html")
                }
                score = secondsLeft
                //The following two lines of code where writen inorder to save yourScore
                //to local storage and then display the score in the scoreDisplay.
                //The local storage seems to be working but yourScore will not display in 
                //the scoreDisplay :(
                localStorage.setItem("yourScore", score);
                scoreDisplay.textContent = yourScore;
                }, 1000);
            };
    }
        startTimer();

//The variable questionsObject is an array of objects. Each object contains a question,
//4 answers, and a correct answer that has been set to a numeric value.
var questionObjects = [ 
    {questionText: "Coding is...?",
    answer1: "Only for nerds.",
    answer2: "The best thing ever.", 
    answer3: "Easy peasy lemon squeezy.", 
    answer4: "Great for tying shoes.",
    correctAnswer: 2,
    },
    {questionText: "What is not used to link a style sheet to your html?",
    answer1: "<link>",
    answer2: "rel=", 
    answer3: "href=", 
    answer4: "<title>",
    correctAnswer: 4,
    }, 
    {questionText: "What is not used as a css selector?",
    answer1: "body",
    answer2: ".container", 
    answer3: "()house", 
    answer4: "#button",
    correctAnswer: 3,
    }, 
    {questionText: "Javascript can be found in the...?",
    answer1: "<link>",
    answer2: "stylesheet", 
    answer3: "<div>", 
    answer4: "<script>",
    correctAnswer: 4,
    }, 
    {questionText: "Bootstrap utilizes...?",
    answer1: "colums and rows",
    answer2: "only css", 
    answer3: "leather and polish", 
    answer4: "leather and css",
    correctAnswer: 1,
    }, 
    {questionText: "The DOM is used to reffer to objects in the...?",
    answer1: "<script>",
    answer2: "stylesheet", 
    answer3: "window", 
    answer4: "Bootstrap",
    correctAnswer: 3,
    }
]

//This group of variables allows for the manipulation of the question and answer fields 
//within the quiz game.
var question = document.querySelector(".question");
var answers = Array.from(document.querySelectorAll("#answer-btn"));
var currentQuestion = {};

//The setQuestion functions is used to set a random question and correctly associate the 
//answers buttons with the coresponding answer choices for the question.
//The question is then removed form the questionObjects array so that it will not appear again.
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
    
//The forEach function gives each answers button an event listener so that each time a
//answer button is clicked the answer is checked against the correct answer. If the 
//answer is incorrect 10 seconds is subtracted from secondsLeft lowering the final score.
//Each click results in 1 being added to answerClicksCount to keep track of how many 
//questions have been answerd and then the next question and answer set is loaded by
//calling the setQuestion function.
    answers.forEach(function(answer) {
        answer.addEventListener("click", function(event) {
            var clickedAnswer = event.target;
            clickedAnswer = clickedAnswer.dataset["number"];
            if (clickedAnswer != currentQuestion.correctAnswer){
                secondsElapsed = secondsElapsed +10;
            }
            answerClicksCount += 1;
            setQuestion();
        });
    });

//This group of variables and the following function are supposed to be used
//to let the user log thier score and initials and then have it appear on screen
//as a highscore. This doesn't work correctly :(
var initials = document.querySelector("#initials");
var saveBtn = document.querySelector("#save-button");
var savedScores = [];
var highScores = localStorage.getItem(savedScores);

    function saveScore(event){
        event.preventDefault();

        var scoreInput = {
            initials: initials.value,
            score: yourScore
        };
        savedScores.push(scoreInput);
        localStorage.setItem("savedScores", initials, score);
        scoreDisplay.textContent = highScores;
    }

    saveBtn.addEventListener("click", saveScore());


