let startValue = 1;
const markBoard = (event) => {

    const $sqDiv = $(event.currentTarget)
    const $xMark = $('<h3>').text('X').addClass('markX')
    const $oMark = $('<h3>').text('O').addClass('markO')

    //if gameWin is true then stop appending to the board
    if (gameWin === false) {

        if (startValue % 2 === 1) {
            if ($sqDiv.children().length === 0) {
                $($sqDiv).append($xMark)

                //each time we add a mark we put values to a mapped out board
                gameBoard[$sqDiv.attr('id')] = 'X'
                //then we wanna run checkResult
                console.log(gameBoard)
                startValue++
                checkResult()

                console.log(startValue)
            }

        } else if (startValue % 2 === 0) {
            if ($sqDiv.children().length === 0) {
                $($sqDiv).append($oMark)
                gameBoard[$sqDiv.attr('id')] = 'O'
                console.log(gameBoard)
                startValue++
                checkResult()

                console.log(startValue)
            }
        }

    }

}

const reset = () => {
    //reset the whole board and return starting value to 1

    $('.square').children('.markX').remove()
    $('.square').children('.markO').remove()
    startValue = 1
    const newBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    gameWin = false

    for (let i = 0; i < 9; i++) {
        gameBoard[i] = newBoard[i]
    }
    $('.gameStatus').text(' ')
}





$(() => {

    $('.square').on('click', markBoard)
    $('.reset').on('click', reset)



})