var bodyEl = document.querySelector("body");
var ulEl = document.querySelector("ul");

var score = "";
var user = "";

// Pull recent score stats from local storage
function init() {
    score = localStorage.getItem("score");
    user = localStorage.getItem("user");

    ulEl.append(user);
    ulEl.append(score);


    console.log(score);
    console.log(user);
}

init() 