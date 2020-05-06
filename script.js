// Create all necessary global variables for HTML elements
var imageEl = document.querySelector(".card-img-top");
var cardTitleEl = document.querySelector(".card-title");
var cardTextEl = document.querySelector(".card-text");
var buttonArrayEl = document.querySelector(".btn-group-vertical");
var startBtn = document.querySelector("#start");

// Incremental counter index variables
var count = 60;
var questionNumber = 0;

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


// Timer count down function
// function startTimer()

// Welcome Card
function game() {

    // Hide the start button
    document.querySelector("#start").style.display = "none";

    // Create button variables
    var button1El = document.createElement("button");
    var button2El = document.createElement("button");
    var button3El = document.createElement("button");
    var button4El = document.createElement("button");

    // Clear variable content
    imageEl.innerHTML = "";
    cardTitleEl.innerHTML = "";
    cardTextEl.innerHTML = "";

    // Add content to variables
    imageEl.setAttribute("src", questionArray[questionNumber].image);
    cardTitleEl.innerHTML = "Question #" + (questionNumber + 1);
    cardTextEl.textContent = questionArray[questionNumber].question;
    button1El.textContent = questionArray[questionNumber].answers[0];
    button2El.textContent = questionArray[questionNumber].answers[1];
    button3El.textContent = questionArray[questionNumber].answers[2];
    button4El.textContent = questionArray[questionNumber].answers[3];

    // Append variable content to DOM elements
    buttonArrayEl.appendChild(button1El);
    buttonArrayEl.appendChild(button2El);
    buttonArrayEl.appendChild(button3El);
    buttonArrayEl.appendChild(button4El);

    // Add style to variables
    button1El.setAttribute("type", "button");
    button1El.setAttribute("class", "btn btn-primary btn-sm");
    button1El.setAttribute("style", "margin: 5px auto");
    button2El.setAttribute("type", "button");
    button2El.setAttribute("class", "btn btn-primary btn-sm");
    button2El.setAttribute("style", "margin: 5px auto");
    button3El.setAttribute("type", "button");
    button3El.setAttribute("class", "btn btn-primary btn-sm");
    button3El.setAttribute("style", "margin: 5px auto");
    button4El.setAttribute("type", "button");
    button4El.setAttribute("class", "btn btn-primary btn-sm");
    button4El.setAttribute("style", "margin: 5px auto");

    // Grade whether the user response is true
    // function displayGrade() {
    //     if (questionArray.correct[questionNumber]) {
    //         prompt("Correct");
    //     } else {
    //         prompt("Wrong answer!");
    //         //adjust timer by -10 seconds
    //     }
    // };

    // Listen for answer button click
    // button1El.addEventListener("click", displayGrade);

    // Advance to next question by increasing the questionNumber value
    questionNumber++;

}

// Start button listeners
startBtn.addEventListener("click", game);
// startBtn.addEventListener("click", startTimer);


// Adjust the score
function (adjustScore) {

}