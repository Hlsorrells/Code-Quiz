// Pull recent score stats from local storage
function updateBoard() {
    // Retrieve local storage values
    var score = localStorage.getItem("score");
    var user = localStorage.getItem("user");

    // Insert a new row into the Leader Table
    var table = document.querySelector("#table-body");
    var row = document.querySelector("#leaderRow");
    var firstCell = document.createElement("td");
    row.appendChild(firstCell);    
    var secondCell = document.createElement("td");
    row.appendChild(secondCell);
    firstCell.textContent = user;
    secondCell.textContent = score;

}

updateBoard();