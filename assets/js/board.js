var tableEl = document.querySelector(".table");
var clearBtn = document.querySelector("#clear");
var tableBody = document.querySelector("#scoreArea")
// Pull recent score stats from local storage
function updateBoard() {
    // Retrieve local storage values
    var highscore = JSON.parse(localStorage.getItem("highscore"));
    highscore = highscore.sort(function (a, b) { return b.score - a.score });

    // Create table body under table header
    for (let i = 0; i < highscore.length; i++) {
        // Insert last game results
        var firstCell = document.createElement("td");
        var trowEl = document.createElement("tr");
        firstCell.textContent = highscore[i].user;
        var secondCell = document.createElement("td");
        secondCell.textContent = highscore[i].score;
        trowEl.appendChild(firstCell);
        trowEl.appendChild(secondCell);
        tableBody.appendChild(trowEl);
    }
}

// Update the Leader Board Results
updateBoard();

// Clear the body from the table
function resetBoard() {
    // Reset local storage values
    localStorage.setItem("score", "");
    localStorage.setItem("user", "");

    // Remove all rows from table body
    tableBody.remove();

    // Recall updateBoard function to clear cells
    updateBoard();
}

// Clear button listener
clearBtn.addEventListener("click", resetBoard);