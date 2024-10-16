const cells = document.querySelectorAll('[data-cell]');
const statusText = document.getElementById('status');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(e) {
    const cell = e.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (board[cellIndex] !== null || !gameActive) {
        return;
    }

    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        statusText.textContent = `${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (board.every(cell => cell !== null)) {
        statusText.textContent = 'It\'s a draw!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `It's ${currentPlayer}'s turn`;
}

