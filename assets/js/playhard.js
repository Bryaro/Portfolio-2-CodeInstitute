const playHardHTML = `<div>
<p>Decide your option:</p>
<button data-option="0" aria-label="rock" class="control">Rock</button>
<button data-option="1" aria-label="paper" class="control">Paper</button>
<button data-option="2" aria-label="scissor" class="control">Scissors</button>
<button data-option="3" aria-label="lizard" class="control">Lizard</button>
<button data-option="4" aria-label="spock" class="control">Spock</button>
</div>
<div id="message">Lets go!!</div>
<div class="player-computer-container">
<div class="player">
    <h2 class="scores">Your score is: <span id="player-score">0</span></h2>
    <img class="player-image" src="assets/images/player-head.jpg" alt="hands">
</div>
<div class="computer-player">
    <h2 class="scores">Computers-score is: <span id="computer-score">0</span></h2>
    <img class="computer-image" src="assets/images/computer-head.jpg" alt="hands">
</div>
</div>
<div>
    <button>Quit</button>
</div>`;