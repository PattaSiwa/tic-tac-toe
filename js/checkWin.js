/////Game Logic////////////
// can map out the board //
// give each div an id with numbers///
const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let gameWin = false

const checkResult = () => {

    //checking all possible wins
    //check horizontal wins
    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
        $('.gameStatus').text(`${gameBoard[0]} won the game`)
        gameWin = true;
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
        $('.gameStatus').text(`${gameBoard[3]} won the game`)
        gameWin = true;
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
        $('.gameStatus').text(`${gameBoard[6]} won the game`)
        gameWin = true;
    }//check for vertical wins
    else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
        $('.gameStatus').text(`${gameBoard[0]} won the game`)
        gameWin = true;
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
        $('.gameStatus').text(`${gameBoard[1]} won the game`)
        gameWin = true;
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
        $('.gameStatus').text(`${gameBoard[2]} won the game`)
        gameWin = true;
    }// check diaganal wins
    else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
        $('.gameStatus').text(`${gameBoard[2]} won the game`)
        gameWin = true;
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
        $('.gameStatus').text(`${gameBoard[0]} won the game`)
        gameWin = true;
    }

    // check for draw - if we marked 9 times(full board) - making startValue to 10 and gameWin still false then it's a draw
    if (startValue === 10 && gameWin === false) {
        $('.gameStatus').text(`it's a draw`)
    }
}




