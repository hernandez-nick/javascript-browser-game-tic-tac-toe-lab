/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.sqr');

const messageEl = document.querySelector('#message');

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const resetBtnEl = document.querySelector('#reset');

/*-------------------------------- Functions --------------------------------*/
init();


function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
}

function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    board.forEach((square, index) => {
        squareEls[index].textContent = square;
    });
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `It's ${turn}'s turn`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = `It's a tie!`;
    } else {
        messageEl.textContent = `Congratulations, ${turn} wins!`;
    }
}

function handleClick(event) {
    const squareIndex = this.getAttribute('id');
    const sqr = event.target;

    if (board[squareIndex] !== '' || winner) return;

    placePiece(sqr, squareIndex);
    checkForWinner();
    checkForTie();
    if (!winner && !tie) {
        switchPlayerTurn();
    }
    render();
}

function placePiece(sqr, idx) {
    board[idx] = turn;
    sqr.textContent = turn;
}

function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
            return;
        }
    }
}

function checkForTie() {
    if (board.every(square => square !== '') && winner === false) {
        tie = true;
    }
}

function switchPlayerTurn() {
    turn = turn === 'X' ? 'O' : 'X';
}


/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener('click', init);

squareEls.forEach(sqr => {
    sqr.addEventListener('click', handleClick);
});