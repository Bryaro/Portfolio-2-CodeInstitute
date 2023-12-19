let sectionArea = document.getElementsByClassName("game-area")[0];
let buttons = document.getElementsByClassName("control");
// let playerScore = document.getElementById("player-score");
// let computerScore = document.getElementById("computer-score");
let playerImage = document.getElementsByClassName("player-image");
let computerImage = document.getElementsByClassName("computer-image");
// let message = document.getElementById("message");
let handSymbol = ["rock", "paper", "scissor", "lizard", "spock"];
let easySymbol = ["rock", "paper", "scissor"];

// document.addEventListener("DOMContentLoaded", function(){
// });

let menu = document.getElementById("menu");
playBtns = document.getElementsByClassName("menu-buttons");

    let rulesHTML = `<div id="rulesModal" class="modal">
                        <a class="close" href="index.html">
                            <button id="closeModalBtn">X</button>
                        </a>
                    </div>`;
    // let closeButton = document.getElementsByClassName("close")[0];

    for (let playBtn of playBtns) {
        console.log("play btns for loop");
        playBtn.addEventListener("click", function(){
            // PLAY EASY
            if (this.innerHTML === "PLAY EASY" ) {
                sectionArea.innerHTML = playEasyHTML;
                sectionArea.style.display = "flow"
                menu.style.display = "none";

                playerScore = document.getElementById("player-score");
                computerScore = document.getElementById("computer-score");
                message = document.getElementById("message");
                buttons = document.getElementsByClassName("control");
                gameMode();
            }
            // PLAY HARD
            else if (this.innerHTML === "PLAY HARD") {
                console.log("PLAY HARD BTN CLICKED!")
                sectionArea.innerHTML = playHardHTML;
                sectionArea.style.display = "flow"
                menu.style.display = "none";

                playerScore = document.getElementById("player-score");
                computerScore = document.getElementById("computer-score");
                message = document.getElementById("message");
                buttons = document.getElementsByClassName("control");
                gameMode(); 
            }

            // RULES
            else if (this.innerHTML === "RULES") {
                console.log("rule btn clicked")
                sectionArea.innerHTML = rulesHTML;
                // menu.style.display = "none";
                sectionArea.style.alignSelf = "center";

                let closeBtn = document.getElementsByClassName("close")[0];

                window.onclick = function(event) {
                    //ill put rules element here when rule btn clicked
                    if (event.target == sectionArea ) {
                        console.log("remove modal was clicked")
                        rulesModal.style.display = "none";
                    } else if (event.target == closeBtn) {
                        rulesModal.style.display = "none";
                    }
                }
            } else {
                // menu.style.display = "block";
            }

        });
    }

function gameMode(isEasy){
    for (let button of buttons) {
        console.log("one menu button was clicked")
        button.addEventListener("click", function() {
            let playerOption = this.getAttribute("data-option");
            letsPlay(playerOption);
        });
    }
}

function letsPlay(playerOption) {
    console.log("letsplay")
    playerImage[0].src = `assets/images/${handSymbol[playerOption]}.jpg`;
    playerImage[0].alt = handSymbol[playerOption];

    let symbolArray = isEasy ? easySymbol : handSymbol;
    let computerOption = Math.floor(Math.random() * symbolArray.length);
    
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

// let ruleBtn = document.getElementById("rulesBtn");
// let modal = document.getElementById("modal");
// let span = document.getElementsByClassName("close")[0];

// ruleBtn.addEventListener("click", function() {
//     console.log("ruleBtn works")
//     modal.style.display = "block";
// });

// span.addEventListener("click", function(){
//     console.log("display none works on span")
//     span.style.display = "none";
// });

// window.addEventListener("click", function(event) {
//     console.log("window click works")
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });