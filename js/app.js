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


/*----------------------------- Event Listeners -----------------------------*/
