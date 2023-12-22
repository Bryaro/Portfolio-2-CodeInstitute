let sectionArea = document.getElementsByClassName("game-area")[0];
let buttons = document.getElementsByClassName("control");
let playerImage = document.getElementsByClassName("player-image");
let computerImage = document.getElementsByClassName("computer-image");
let handSymbol = ["rock", "paper", "scissor", "lizard", "spock"];
let easySymbol = ["rock", "paper", "scissor"];
let playBtns = document.getElementsByClassName("menu-buttons");
let modalBtn = document.getElementById("modalBtn");
let modalContainer = document.getElementById("modal-container");
let span = document.getElementsByClassName("close")[0];
let menu = document.getElementById("menu");
let hoverSound = new Audio("assets/sounds/start-13691.mp3");
let clickSound = new Audio("assets/sounds/decidemp3-14575.mp3");
let gameOverSound = new Audio("assets/sounds/gameover.mp3");
let victorySound = new Audio("assets/sounds/victory.mp3");
let playerScore;
let computerScore;
let message;
const playHardHTML = `<div>
<p>Decide your option:</p>
<button data-option="0" aria-label="rock" class="control">Rock</button>
<button data-option="1" aria-label="paper" class="control">Paper</button>
<button data-option="2" aria-label="scissor" class="control">Scissors</button>
<button data-option="3" aria-label="lizard" class="control">Lizard</button>
<button data-option="4" aria-label="spock" class="control">Spock</button>
</div>
<div id="message"></div>
<div class="player-computer-container">
<div class="player">
    <h2 class="scores">My score: <span id="player-score">0</span></h2>
    <img class="player-image" src="assets/images/player-head.jpg" alt="hands">
</div>
<div class="computer-player">
    <h2 class="scores">His score: <span id="computer-score">0</span></h2>
    <img class="computer-image" src="assets/images/computer-head.jpg" alt="hands">
</div>`;
const playEasyHTML = `<div>
<p>Decide your option:</p>
<button data-option="0" aria-label="rock" class="control">Rock</button>
<button data-option="1" aria-label="paper" class="control">Paper</button>
<button data-option="2" aria-label="scissor" class="control">Scissors</button>
</div>
<div id="message"></div>
<div class="player-computer-container">
<div class="player">
    <h2 class="scores">My score: <span id="player-score">0</span></h2>
    <img class="player-image" src="assets/images/player-head.jpg" alt="hands">
</div>
<div class="computer-player">
    <h2 class="scores">His score: <span id="computer-score">0</span></h2>
    <img class="computer-image" src="assets/images/computer-head.jpg" alt="hands">
</div>`;

function openModal() {
    modalContainer.style.display = "block";
}

function closeModal() {
    modalContainer.style.display = "none";
}

modalBtn.addEventListener("click", openModal);
modalContainer.addEventListener("click", closeModal);
span.addEventListener("click", closeModal);

// Assign scores, messages, controls for player and computer.
function setupGame() {
    playerScore = document.getElementById("player-score");
    computerScore = document.getElementById("computer-score");
    message = document.getElementById("message");
    buttons = document.getElementsByClassName("control");
    message.textContent = "Lets go!";
    resetBtn.style.display = "block";
}

// Sets up game mode (easy or hard) and attaches event listeners to buttons.
function gameMode(isEasy){
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerOption = this.getAttribute("data-option");
            letsPlay(playerOption, isEasy);
        });
    }
}

// Toggles sound effects (mute/unmute).
let muteIcon = document.getElementById("muteIcon");
muteIcon.addEventListener("click", function(){
    hoverSound.muted = !hoverSound.muted;
    clickSound.muted = !clickSound.muted;
    victorySound.muted = !victorySound.muted;
    gameOverSound.muted =!gameOverSound.muted;

    if (hoverSound.muted) {
        muteIcon.innerHTML = `<i class="fas fa-volume-mute"></i>`;
    } else {
        muteIcon.innerHTML = `<i class="fas fa-volume-up"></i>`;
    }
});

hoverSound.muted = "true";
clickSound.muted = "true";
victorySound.muted = "true";
gameOverSound.muted = "true";

for (let playBtn of playBtns) {
    playBtn.addEventListener('mouseenter', function() {
        if (!hoverSound.muted) {
            hoverSound.play();
        }
    });
        playBtn.addEventListener('click', function() {
        if (!clickSound.muted) {
            clickSound.play();
        }
    });
    playBtn.addEventListener("click", function(){

        if (this.innerHTML === "PLAY EASY" ) {
            sectionArea.innerHTML = playEasyHTML;
            sectionArea.style.display = "flow";
            menu.style.display = "none";
            gameMode(true);
            setupGame();
        } else if (this.innerHTML === "PLAY HARD") {
            sectionArea.innerHTML = playHardHTML;
            sectionArea.style.display = "flow";
            menu.style.display = "none";
            gameMode(false); 
            setupGame();
        } else if (this.innerHTML === "RULES") {
            modalContainer.innerHTML = `<div class="modal-content" id="modal-content">
            <span class="close">&times;</span>
            <p><img class="rules-image" src="assets/images/rules.png" alt="rules"></p>
        </div>
    </div>`;
        }
    });
}

// Handles gameplay logic based on selected options.
function letsPlay(playerOption, isEasy) {
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

// Updates the score and displays results.
function updateScores(result) {
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
     victorySound.play();
     sectionArea.style.backgroundColor = "Green";
     resetBtn.style.display = "none";

    } else if (parseInt(computerScore.textContent) === 5){
        sectionArea.innerHTML = `<div class="victory-message">
        <h1>GAME OVER!</h1>
        <a href="index.html">
        <button>Back to Menu</button>
        </a>
     </div>`;
     gameOverSound.play();
     sectionArea.style.backgroundColor = "red";
     resetBtn.style.display = "none";
    }
}

let resetBtn = document.getElementById("resetBtn");
let gameResetModal = document.getElementById("confirmationModal");
let confirmBtn = document.getElementById("confirmBtn");
let cancelBtn = document.getElementById("cancelBtn");

resetBtn.addEventListener("click", function(){
    gameResetModal.style.display = "block";
});

confirmBtn.addEventListener("click", function(){
    window.location.reload();
});

cancelBtn.addEventListener("click", function() {
    gameResetModal.style.display = "none";
});