// Elements
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('start-btn');
const finalScoreDisplay = document.getElementById('final-score-display');
const endScoreSpan = document.getElementById('end-score');

// Game Variables
let score = 0;
let timeLeft = 30;
let gameActive = false;
let gameLoopCountdown; // The main 30s timer
let bugSpawnTimeout;   // The timeout for the next bug spawn

// Difficulty Settings
let spawnRate = 1500; // Initial spawn rate (ms)
const minSpawnRate = 400; // Fastest they can ever spawn
const difficultyStep = 50; // How many ms faster per bug squashed

// --- Event Listeners ---
startBtn.addEventListener('click', startGame);

// --- Core Game Functions ---

function startGame() {
    // Reset variables
    score = 0;
    timeLeft = 30;
    spawnRate = 1500;
    gameActive = true;

    // Update UI
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = timeLeft;
    overlay.style.display = 'none';
    finalScoreDisplay.style.display = 'none';

    // Start Timers
    gameLoopCountdown = setInterval(updateTimer, 1000);
    spawnNextBug();
}

function updateTimer() {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    gameActive = false;
    clearInterval(gameLoopCountdown);
    clearTimeout(bugSpawnTimeout);

    // Clear remaining bugs
    const remainingBugs = document.querySelectorAll('.bug');
    remainingBugs.forEach(bug => bug.remove());

    // Show Game Over UI
    endScoreSpan.textContent = score;
    finalScoreDisplay.style.display = 'block';
    overlay.style.display = 'flex';
    startBtn.textContent = "RESTART SESSION_";
}

// --- The Bug Logic ---

function spawnNextBug() {
    if (!gameActive) return;

    // 1. Create Bug Element
    const bug = document.createElement('div');
    bug.classList.add('bug');

    // 2. Calculate Random Position based on board size
    // We subtract 60 (bug width + padding) to ensure it doesn't spawn off-edge
    const maxX = gameBoard.clientWidth - 60;
    const maxY = gameBoard.clientHeight - 60;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    bug.style.left = `${randomX}px`;
    bug.style.top = `${randomY}px`;

    // 3. Add click listener (The Squash mechanic)
    bug.addEventListener('click', squashBug);

    // 4. Add to board
    gameBoard.appendChild(bug);

    // 5. Bug Lifespan (if ignored, it disappears without points)
    // Bugs hang around for 2 seconds initially.
    setTimeout(() => {
        if (bug && !bug.classList.contains('patched') && gameBoard.contains(bug)) {
           bug.classList.add('missed');
           // Remove after missed animation plays
           setTimeout(() => { if(gameBoard.contains(bug)) bug.remove()}, 300);
        }
    }, 2000);


    // 6. Schedule next spawn
    bugSpawnTimeout = setTimeout(spawnNextBug, spawnRate);
}

function squashBug(e) {
    // prevent double clicks or clicking if game ended
    if(!gameActive || e.target.classList.contains('patched')) return;

    const bug = e.target;

    // Visual Feedback
    bug.classList.add('patched');

    // Score update
    score++;
    scoreDisplay.textContent = score;

    // Increase Difficulty (make spawn rate faster)
    spawnRate = Math.max(minSpawnRate, spawnRate - difficultyStep);
    console.log(`Bug patched! New spawn rate: ${spawnRate}ms`);
    
    // Cleanup DOM after animation finishes
    setTimeout(() => {
       if(gameBoard.contains(bug)) bug.remove();
    }, 500); 
}