let sectionArea = document.getElementsByClassName("game-area")[0];
let buttons = document.getElementsByClassName("control");
let playerImage = document.getElementsByClassName("player-image");
let computerImage = document.getElementsByClassName("computer-image");
let handSymbol = ["rock", "paper", "scissor", "lizard", "spock"];
let easySymbol = ["rock", "paper", "scissor"];
let modalBtn = document.getElementById("modalBtn");
let modalContainer = document.getElementById("modal-container");
let span = document.getElementsByClassName("close")[0];
let menu = document.getElementById("menu");

function openModal() {
    modalContainer.style.display = "block";
}

function closeModal() {
    modalContainer.style.display = "none";
}

modalBtn.addEventListener("click", openModal);
modalContainer.addEventListener("click", closeModal);
span.addEventListener("click", closeModal);

playBtns = document.getElementsByClassName("menu-buttons");

    function gameMode(isEasy){
        for (let button of buttons) {
            console.log("one menu button was clicked")
            button.addEventListener("click", function() {
                let playerOption = this.getAttribute("data-option");
                letsPlay(playerOption, isEasy);
            });
        }
    }

    for (let playBtn of playBtns) {
        console.log("play btns for loop");
        playBtn.addEventListener("click", function(){
        // PLAY EASY
            if (this.innerHTML === "PLAY EASY" ) {
                sectionArea.innerHTML = playEasyHTML;
                sectionArea.style.display = "flow"
                menu.style.display = "none";
                // Can I make these a setupGame() to reuse since Im using it twice
                // setupGame();
                playerScore = document.getElementById("player-score");
                computerScore = document.getElementById("computer-score");
                message = document.getElementById("message");
                buttons = document.getElementsByClassName("control");
                message.textContent = "Lets go!";
                gameMode(true);
                // setQuitBtns();
            }
        // PLAY HARD
            else if (this.innerHTML === "PLAY HARD") {
                console.log("PLAY HARD BTN CLICKED!")
                sectionArea.innerHTML = playHardHTML;
                sectionArea.style.display = "flow"
                menu.style.display = "none";
            // Can I make these a setupGame() to reuse since Im using it twice
            // setpupGame();
                playerScore = document.getElementById("player-score");
                computerScore = document.getElementById("computer-score");
                message = document.getElementById("message");
                buttons = document.getElementsByClassName("control");
                message.textContent = "Lets go!";
                gameMode(false); 
                // setQuitBtns();
            }

        // RULES
            else if (this.innerHTML === "RULES") {
                console.log("rule btn clicked")
                modalContainer.innerHTML = `<div class="modal-content" id="modal-content">
                <span class="close">&times;</span>
                <p><img class="rules-image" src="assets/images/RoshomboRules.jpeg" alt="rules"></p>
            </div>
        </div>`
            }

        });
    }
    
// function setQuitBtns() {
//     console.log("function quit BUTTONS running!")
//    let quitBtns = document.getElementsByClassName("quitBtn");
//    for (let quitBtn of quitBtns) {
//         quitBtn.addEventListener("click", function() {
//             console.log("playeasy Quit Btn clicked!")
//             modalContainer.innerHTML = `    <section class="game-area">
//             <div id="menu">
//                 <button id="easyBtn" class="menu-buttons">PLAY EASY</button>
//                 <button id="hardBtn" class="menu-buttons">PLAY HARD</button> 
//                 <button class="menu-buttons" id="modalBtn">RULES</button>
//                 <button class="menu-buttons">SETTINGS</button>
//             </div>
//             </section>
//             `;
//             sectionArea.innerHTML = modalContainer.innerHTML;
//         })
//    }
// }

function letsPlay(playerOption, isEasy) {
    console.log("letsplay")
    let symbolArray = isEasy ? easySymbol : handSymbol;
    playerImage[0].src = `assets/images/${symbolArray[playerOption]}.jpg`;
    playerImage[0].alt = symbolArray[playerOption];

    let computerOption = Math.floor(Math.random() * symbolArray.length);
    
    computerImage[0].src = `assets/images/${symbolArray[computerOption]}.jpg`;
    computerImage[0].alt = symbolArray[computerOption];

    let result = winner(symbolArray[playerOption], symbolArray[computerOption]);

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
        if (parseInt(computerScore.textContent) === 5) {
            message.textContent = "Computer win!";
        }
    } else {
        message.textContent = "It's a draw!";
    }

    if (parseInt(playerScore.textContent) === 5) {
        sectionArea.innerHTML = `<div class="victory-message">
        <h1>VICTORY!</h1>
        <a href="index.html">
        <button>Back to Menu</button>
        </a>
     </div>`;
     sectionArea.style.backgroundColor = "Green";

    } else if (parseInt(computerScore.textContent) === 5){
        sectionArea.innerHTML = `<div class="victory-message">
        <h1>GAME OVER!</h1>
        <a href="index.html">
        <button>Back to Menu</button>
        </a>
     </div>`;
     sectionArea.style.backgroundColor = "red";
    }
}

let resetBtn = document.getElementById("resetBtn");
let modalRest = document.getElementById("confirmationModal");
let CofirmBtn = document.getElementById("confirmBtn");
let cancelBtn = document.getAnimations("cancelBtn");

resetBtn.addEventListener("click", function() {
    window.location.reload();
})


// let quitBtn = document.getElementsByClassName("quitBtn");
// quitBtn.addEventListener("click", function() {
//     if (confirm("This website will quit, are you sure?")) {
//         window.close();
//     }
// })

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
