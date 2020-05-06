// Create all necessary global variables for HTML elements
var carousel = document.querySelector(".carouselbox");
var imageEl = document.querySelector(".card-img-top");
var cardTitleEl = document.querySelector(".card-title");
var cardTextEl = document.querySelector(".card-text");
var buttonArrayEl = document.querySelector(".btn-group-vertical");
var button1El = document.querySelector("#button1");
var button2El = document.querySelector("#button2");
var button3El = document.querySelector("#button3");
var button4El = document.querySelector("#button4");
var startBtn = document.querySelector("#start");
var timerEL = document.querySelector("#timer");

// Incremental counter index variables
var secondsLeft = 60;
var questionIndex = 0;
var currentScore = 0;
var score = localStorage.getItem("score");

// Array variable to contain the question objects
var questionArray = [
    {
        question: "Which state only has a single four-year college?",
        answers: ["a. Montana", "b. North Dakota", "c. South Dakota", "d. Wyoming"],
        correct: "d. Wyoming",
        image: "http://placekitten.com/200/200"
    },
    {
        question: "Which state was the first to give women the right to vote?",
        answers: ["a. Utah", "b. Wyoming", "c. Idaho", "d. Colorado"],
        correct: "b. Wyoming",
        image: "http://placekitten.com/200/200"
    },
    {
        question: "Which state has the lowest population of all fifty states?",
        answers: ["a. Wyoming", "b. Alaska", "c. North Dakota", "d. Montana"],
        correct: "a. Wyoming",
        image: "http://placekitten.com/200/200"
    },
    {
        question: "Which state has the highest cattle to people ratio?",
        answers: ["a. Montana", "b. Wyoming", "c. South Dakota", "d. Idaho"],
        correct: "c. South Dakota",
        image: "http://placekitten.com/200/200"
    },
    {
        question: "Which state has the world's first alpine skiing chairlift?",
        answers: ["a. Montana", "b. Idaho", "c. Utah", "d. Colorado"],
        correct: "b. Idaho",
        image: "http://placekitten.com/200/200"
    },
];

// Timer function set to 1 second interval
// function startTimer() {
//     div.appendChild(timerEL);
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timerEl.textContent = secondsLeft + " seconds left!";

//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             // sends to high score
//             endGame();
//         }
//     }, 1000);
// }

// End game function
function endGame() {
    console.log(currentScore);
    currentScore.textContent = score;
    localStorage.setItem("score", score);
}

// Game Play function
function game() {

    // Hide the start button
    document.querySelector("#start").style.display = "none";

    // Add style to variables
    button1El.setAttribute("class", "btn btn-primary btn-sm d-block");
    button2El.setAttribute("class", "btn btn-primary btn-sm d-block");
    button3El.setAttribute("class", "btn btn-primary btn-sm d-block");
    button4El.setAttribute("class", "btn btn-primary btn-sm d-block");

    // Clear variable content
    imageEl.innerHTML = "";
    cardTitleEl.innerHTML = "";
    cardTextEl.innerHTML = "";

    console.log(questionIndex);
    // Add content to variables
    imageEl.setAttribute("src", questionArray[questionIndex].image);
    cardTitleEl.innerHTML = "Question #" + (questionIndex + 1);
    cardTextEl.textContent = questionArray[questionIndex].question;
    button1El.textContent = questionArray[questionIndex].answers[0];
    button2El.textContent = questionArray[questionIndex].answers[1];
    button3El.textContent = questionArray[questionIndex].answers[2];
    button4El.textContent = questionArray[questionIndex].answers[3];

    // Append variable content to DOM elements
    buttonArrayEl.appendChild(button1El);
    buttonArrayEl.appendChild(button2El);
    buttonArrayEl.appendChild(button3El);
    buttonArrayEl.appendChild(button4El);

    // Grade whether the user response is true
    function displayGrade(event) {
        console.log(questionIndex);
        var correctAnswer = questionArray[questionIndex].correct;
        console.log(correctAnswer);
        if (event.target.textContent === correctAnswer) {
            alert("Correct!! You just got 10 points!!!");
            // Adjust current score by 10 points
            currentScore += 10;
            console.log(currentScore);
            navigate();
        } else {
            alert("Wrong answer!");
            // Adjust timer by -10 seconds
            secondsLeft -= 10;
            navigate();
        }
    };
    // Listen for answer button click
    button1El.addEventListener("click", displayGrade);
    button2El.addEventListener("click", displayGrade);
    button3El.addEventListener("click", displayGrade);
    button4El.addEventListener("click", displayGrade);
}

// Carousel function
function navigate() {
    // Advance to next question by increasing the questionIndex value
    questionIndex++;
    // Verify condition of next question and 
    if (questionIndex < questionArray.length && secondsLeft != 0) {
        game();
    } else {
        endGame();
    }
}

// Start button listeners
startBtn.addEventListener("click", game);
// startBtn.addEventListener("click", startTimer);




// User input of initials
// input(Please enter your initials)

// button to leaderboard