const prompt = require('prompt');

prompt.start();

class ttt {
    constructor() {
        this.board = [1,2,3,4,5,6,7,8,9];
        this.turn = 'X';
        this.count = 0;
    }

    placePiece(number) {
        // check if number has been toggled
        if (typeof this.board[number - 1] === 'number') {
            this.board[number-1] = this.turn
            count++
        } else {
            console.log('error, place already pieced')
        }
        if (this.turn === 'X') {
            this.turn = 'O'
        } else {
            this.turn = 'X'
        }
        // if count >= 5, run check winner
        if (this.count >= 5) {
            this.checkWinner();
        }
    }

    checkWinner() {
        
    }
}

