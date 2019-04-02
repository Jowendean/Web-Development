var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0; 
var winningScore = 5;
var gameOver = false;

/*
    Event checks if game is over. If game is not over, add to p1 score and display it 
    on the scoreboard. If there is a winning score, add a winner class to p1Display and game over
    is set to true
*/
p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
        console.log(p1Score, winningScore);
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
    
});

/*
    Event checks if game is over. If game is not over, add to p2 score and display it 
    on the scoreboard. If there is a winning score, add a winner class to p2Display and game over
    is set to true
*/
p2Button.addEventListener("click", function() {
    if(!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
    }
});

//Reset the score anytime the score button is clicked.
resetButton.addEventListener("click", function() {
    reset();
});

//Change runs anytime a value changes. Changes the value of the input anytime its button is clicked
//or when manual data is put it. Calls reset afterwards.
numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

//Function resets the score of both players and displays it on the scoreboard. 
//Remove the winner class from both players and set gameOver to false.
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}