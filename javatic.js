let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const playerTurnDisplay = document.querySelector('h2');
const printMessage = document.querySelector('#print');
const cells = document.querySelectorAll('.cell');

function makeMove(cell) {
    const cellIndex = Array.from(cells).indexOf(cell);

    if (gameOver || gameBoard[cellIndex] !== '') return;

    gameBoard[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    
    if (checkWin()) {
        printMessage.textContent = `Player ${currentPlayer} wins!`;
        gameOver = true;
    } else if (gameBoard.every(cell => cell !== '')) {
        printMessage.textContent = "It's a draw!";
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerTurnDisplay.textContent = `Player Turn: ${currentPlayer}`;
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function resetBoard() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;

    cells.forEach(cell => {
        cell.textContent = '';
    });

    printMessage.textContent = '';
    playerTurnDisplay.textContent = 'Player Turn: X';
}

resetBoard();
