let buttons = document.getElementsByClassName("control");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerImage = document.getElementsByClassName("player-image");
let computerImage = document.getElementsByClassName("computer-image");
let message = document.getElementById("message");
let handSymbol = ["rock", "paper", "scissor", "lizard", "spock"];

document.addEventListener("DOMContentLoaded", function(){

    let menu = document.getElementById("menu");
    playBtns = document.getElementsByClassName("menu-buttons");
    let rulesHTML = `<div id="rulesModal" class ="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <h2>Game Rules</h2>
                            <img class="rules-image" src="" alt="rules-image">
                        </div>
                    </div>`;
    let closeButton = document.getElementsByClassName("close")[0];

    for (let playBtn of playBtns) {
        console.log("play btns for loop");
        playBtn.addEventListener("click", function(){
            if (this.innerHTML === "RULES") {
                console.log("rule btn clicked, ready to put html")
                //ill put rules element here when rule btn clicked
            } else {
                // menu.style.display = "none";
            }

        });
    }

});

for (let button of buttons) {
    console.log("button was clicked")
    button.addEventListener("click", function() {
        let playerOption = this.getAttribute("data-option");
        letsPlay(playerOption);
    });
}

function letsPlay(playerOption) {
    console.log("letsplay")
    playerImage[0].src = `assets/images/${handSymbol[playerOption]}.jpg`;
    playerImage[0].alt = handSymbol[playerOption];

    let computerOption = Math.floor(Math.random() * 5);

    computerImage[0].src = `assets/images/${handSymbol[computerOption]}.jpg`;
    computerImage[0].alt = handSymbol[computerOption];

    let result = winner(handSymbol[playerOption], handSymbol[computerOption]);

    updateScores(result);
}

function winner(playerOption, computerOption) {
    console.log("winner")
    if (playerOption === computerOption) {
        return "draw";
    }

    if ((playerOption === "rock" && (computerOption === "scissor" || computerOption === "lizard")) ||
    (playerOption === "paper" && (computerOption === "rock" || computerOption === "spock")) ||
    (playerOption === "scissor" && (computerOption === "paper" || computerOption === "lizard")) ||
    (playerOption === "lizard" && (computerOption === "spock" || computerOption === "paper")) ||
    (playerOption === "spock" && (computerOption === "scissor" || computerOption === "rock"))) {
    return "player";
}

return "computer";

}

function updateScores(result) {
    console.log("updateScores")
    if (result === "player") {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        message.textContent = "You win!";
    } else if (result === "computer") {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        message.textContent = "Computer wins!";
    } else {
        message.textContent = "It's a draw!";
    }
}

let ruleBtn = document.getElementById("rulesBtn");
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];

ruleBtn.addEventListener("click", function() {
    console.log("ruleBtn works")
    modal.style.display = "block";
});

span.addEventListener("click", function(){
    console.log("display none works on span")
    span.style.display = "none";
});

window.addEventListener("click", function(event) {
    console.log("window click works")
    if (event.target == modal) {
        modal.style.display = "none";
    }
});