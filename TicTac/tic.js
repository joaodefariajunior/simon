const statusDisplay = document.querySelector('.game--status');
/*

 current will store our player here, so we know whos turn 
*/
let currentPlayer = "X";
/*
current game state will store here, the form of empty strings in an array
  allowing us to easily track played cells and validate the game state later on
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
having declared some messages  which will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `it's a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
/*
 setting the inital message to let the players know whose turn it is
*/
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {

}
/*
 adding our event listeners to the actual game cells, and 
restart button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
    /*
    saving the clicked html element in a variable for easier further use
    */    
        const clickedCell = clickedCellEvent.target;
    /*
    grabbing  the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
    Please note that the getAttribute will return a string value. It is  needed an actual number we will parse it to an 
    integer(number)
    */
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );
    /* 
    Next  checking whether the call has already been played, 
    or if the game is paused. If either of those is true  will simply ignore the click.
    */
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
    /* 
    If everything if in order it will proceed with the game flow
    */    
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }
    function handleCellPlayed(clickedCell, clickedCellIndex) {
        /*
         updating the internal game state to reflect the played move, 
        as well as update the user interface to reflect the played move
        */
            gameState[clickedCellIndex] = currentPlayer;
            clickedCell.innerHTML = currentPlayer;
        }
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        function handleResultValidation() {
            let roundWon = false;
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                let a = gameState[winCondition[0]];
                let b = gameState[winCondition[1]];
                let c = gameState[winCondition[2]];
                if (a === '' || b === '' || c === '') {
                    continue;
                }
                if (a === b && b === c) {
                    roundWon = true;
                    break
                }
            }
        if (roundWon) {
                statusDisplay.innerHTML = winningMessage();
                gameActive = false;
                return;
            }
        /* 
 checking weather there are any values in the  game state array 
that are still not populated with a player sign
*/
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
/*
If get to here we know that the no one won the game yet, 
and that there are still moves to be played, so it will continue by changing the current player.
*/
    handlePlayerChange();
}
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}