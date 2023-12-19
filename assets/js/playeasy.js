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
</div>
</div>
<div>
<a href="index.html"><button class="quitBtn">Quit</button></a>
</div>`;