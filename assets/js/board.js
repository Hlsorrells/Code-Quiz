var tableEl = document.querySelector(".table");
var clearBtn = document.querySelector("#clear");

// Pull recent score stats from local storage
function updateBoard() {
    // Retrieve local storage values
    var score = localStorage.getItem("score");
    var user = localStorage.getItem("user");

    // Create table body under table header
    var tbodyEl = document.createElement("tbody");
    tableEl.appendChild(tbodyEl);
    var trowEl = document.createElement("tr");
    tbodyEl.appendChild(trowEl);

    // Insert last game results
    var firstCell = document.createElement("td");
    trowEl.appendChild(firstCell);
    firstCell.textContent = user;
    var secondCell = document.createElement("td");
    trowEl.appendChild(secondCell);
    secondCell.textContent = score;

}

// Update the Leader Board Results
updateBoard();

// Clear the body from the table
function resetBoard() {
    // Reset local storage values
    localStorage.setItem("score", "");
    localStorage.setItem("user", "");

    // Remove all rows from table body
    var tbodyEl = document.querySelector("tbody");
    tbodyEl.remove();

    // Recall updateBoard function to clear cells
    updateBoard();
}

// Clear button listener
clearBtn.addEventListener("click", resetBoard);