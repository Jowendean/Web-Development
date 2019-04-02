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

console.log(p1Display);
console.log(p2Display);
console.log(resetButton);

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

resetButton.addEventListener("click", function() {
    reset();
});

//Change runs anytime a value changes.
numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}