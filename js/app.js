/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.square');

const messageEl = document.getElementById('message');





/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/



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


function updateBoard() {{
    board.forEach((square, index) => {
        squareEls[index].textContent = square;
    });
}


function updateMessage() {
    if (winner, tie) === false {
        messageEl.textContent = `It's ${turn}'s turn`;
    } else if (winner === false && tie === true) {
        messageEl.textContent = `It's a tie!`;
    } else {
        messageEl.textContent = `Congratulations, ${turn} wins!`;
    }
}}



/*----------------------------- Event Listeners -----------------------------*/
