let startValue = 1;
const markBoard = (event) => {

    const $sqDiv = $(event.currentTarget)
    const $xMark = $('<h3>').text('X').addClass('markX')
    const $oMark = $('<h3>').text('O').addClass('markO')
    if (startValue % 2 === 1) {
        if ($sqDiv.children().length === 0) {
            $($sqDiv).append($xMark)
            console.log($sqDiv.attr('id'))
            startValue++
        }

    } else if (startValue % 2 === 0) {
        if ($sqDiv.children().length === 0) {
            $($sqDiv).append($oMark)
            startValue++
        }
    }
}

const reset = () => {
    $('.square').children('.markX').remove()
    $('.square').children('.markO').remove()
}


//////Game Logic////////////
// can map out the board //
// give each div an id with numbers///
//each time we add a mark we put values to a mapped out board

const gameBoardX = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
const gameBoardO = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]





$(() => {

    $('.square').on('click', markBoard)
    $('#reset').on('click', reset)



})