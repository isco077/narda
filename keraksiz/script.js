const board = document.getElementById('board');
const diceDiv = document.getElementById('dice');

let boardState = Array(24).fill(0);
let currentPlayer = 'white';

function createBoard() {
    for (let i = 0; i < 24; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.index = i;
        board.appendChild(square);
    }
}

function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    diceDiv.textContent = `Rolled: ${die1}, ${die2}`;
    movePieces(die1, die2);
}

function movePieces(die1, die2) {
    // Simplified movement logic for the purpose of this example
    console.log(`Moving pieces for ${currentPlayer} by ${die1} and ${die2} steps`);
    currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
}

function initGame() {
    createBoard();
    placeInitialPieces();
}

function placeInitialPieces() {
    // Place pieces on the board (simplified)
    const initialPositions = [
        { position: 0, count: 2, color: 'black' },
        { position: 11, count: 2, color: 'white' },
        { position: 23, count: 2, color: 'white' },
        { position: 12, count: 2, color: 'black' }
    ];
    initialPositions.forEach(({ position, count, color }) => {
        const square = board.children[position];
        for (let i = 0; i < count; i++) {
            const piece = document.createElement('div');
            piece.classList.add('piece', color);
            square.appendChild(piece);
        }
    });
}

initGame();
