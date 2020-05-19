// Create all necessary global variables for HTML elements
var carousel = document.querySelector(".carouselbox");
var imageEl = document.querySelector(".card-img-top");
var cardTitleEl = document.querySelector(".card-title");
var cardTextEl = document.querySelector(".card-text");
var buttonGroupEl = document.querySelector(".btn-group-vertical");
var startBtn = document.querySelector("#start");
var inputLabelEl = document.querySelector("#initialsInputLabel");
var inputEL = document.querySelector('#initialsInput');
var continueBtn = document.querySelector("#continue");


// Incremental counter index variables
var secondsLeft = 60;
var questionIndex = 0;
var timer;
var score;
var user;

// Array variable to contain the question objects
var questionArray = [
    {
        question: "Which state only has a single four-year college?",
        answers: ["a. Montana", "b. North Dakota", "c. South Dakota", "d. Wyoming"],
        correct: "d. Wyoming",
        image: "assets/images/colorado.jpg"
    },
    {
        question: "Which state has the world's first alpine skiing chairlift?",
        answers: ["a. Montana", "b. Idaho", "c. Utah", "d. Colorado"],
        correct: "b. Idaho",
        image: "assets/images/autumn-stream-with-clouds-covering-the-mountains_800.jpg"
    },
    {
        question: "Which state has the lowest population of all fifty states?",
        answers: ["a. Wyoming", "b. Alaska", "c. North Dakota", "d. Montana"],
        correct: "a. Wyoming",
        image: "assets/images/mount-jefferson-and-indian-paintbrush-flowers-landscape.jpg"
    },
    {
        question: "Which state has the highest cattle to people ratio?",
        answers: ["a. Montana", "b. Wyoming", "c. South Dakota", "d. Idaho"],
        correct: "c. South Dakota",
        image: "assets/images/cloudy-panoramic-landscape-in-yellowstone-national-park.jpg"
    },
    {
        question: "Which state was the first to give women the right to vote?",
        answers: ["a. Utah", "b. Wyoming", "c. Idaho", "d. Colorado"],
        correct: "b. Wyoming",
        image: "assets/images/view-of-the-elkhorn-mountain-range_800.jpg"
    },
];

// Timer function set to 1 second interval
function startTimer() {
    var timerEL = document.querySelector("#timer");
    timer = setInterval(function () {
        secondsLeft--;
        timerEL.textContent = "Seconds Left: " + secondsLeft;
        if (secondsLeft === 0) {
            endGame()
        };
    }, 1000);
};

// End game function
function endGame() {
    // Resets the timer interval
    clearInterval(timer);

    // Hide start button & answer button group
    startBtn.style.display = "none";
    buttonGroupEl.classList.remove("d-block");
    buttonGroupEl.classList.add("d-none");

    // Unhide the Initials Input
    inputLabelEl.classList.remove("d-none");
    inputLabelEl.classList.add("d-block");
    inputEL.classList.remove("d-none");
    inputEL.classList.add("d-block");
    continueBtn.classList.remove("d-none");
    continueBtn.classList.add("d-block");

    // Clear element content
    imageEl.innerHTML = "";
    cardTitleEl.innerHTML = "";
    cardTextEl.innerHTML = "";

    // Add content to card
    imageEl.setAttribute("src", "assets/images/rocky_mountain_thunderstorms_513975.jpg");
    cardTitleEl.innerHTML = "Game Results!!!";
     // Sets the seconds left as the final score
     score = secondsLeft;
    cardTextEl.innerHTML = "You have " + score + " points!!";

    // Trigger local storage
    // localStorage();
};

// Set user initials and score to local storage
function local(event) {
    console.log('test')
    event.preventDefault()
    // Retrieve user initials from input box
    user = document.getElementById("initialsInput").value

    // Stores values of user and score to localStorage
    var highScore = JSON.parse(localStorage.getItem('highscore'));
    if (highScore === null) {
        highScore = []
    }
    var scoreObj = { "user": user, "score": secondsLeft };
    highScore.push(scoreObj);
    localStorage.setItem("highscore", JSON.stringify(highScore));
    window.location.assign("leaderboard.html")
}

// Grade whether the user response is true
function displayGrade(event) {
    var correctAnswer = questionArray[questionIndex].correct;
    if (event.target.textContent === correctAnswer) {
        navigate();
    } else {
        // Adjust timer by -10 seconds
        secondsLeft -= 10;
        navigate();
    }
};

// Game Play function
function game() {
    // Hide the start button
    startBtn.style.display = "none";

    // Unhide the answer button group
    buttonGroupEl.classList.remove("d-none");
    buttonGroupEl.classList.add("d-block");

    // Clear element content
    imageEl.innerHTML = "";
    cardTitleEl.innerHTML = "";
    cardTextEl.innerHTML = "";

    // Add content to card
    imageEl.setAttribute("src", questionArray[questionIndex].image);
    var temp = questionIndex;
    cardTitleEl.innerHTML = "Question #" + (temp + 1);
    cardTextEl.textContent = questionArray[questionIndex].question;
    for (var i = 0; i < questionArray[questionIndex].answers.length; i++) {
        var buttonEl = document.querySelectorAll("button.btn-sm");
        buttonEl[i].textContent = questionArray[questionIndex].answers[i];
        buttonEl[i].addEventListener("click", displayGrade);
    }
}

// Carousel function
function navigate() {
    // Advance to next question by increasing the questionIndex value
    questionIndex++;
    // Verify condition of next question and 
    if (questionIndex !== questionArray.length) {
        game();
    } else {
        endGame();
    }
}

// Start button listeners
startBtn.addEventListener("click", function () {
    game();
    startTimer();
});