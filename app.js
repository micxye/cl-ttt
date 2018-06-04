const prompt = require('prompt');

class ttt {
    constructor() {
        prompt.start();
        this.reset();
    }

    reset() {
        this.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.turn = 'X';
        this.count = 0;
        this.win = false;
        this.printBoard()
        prompt.message = 'X goes first!'
        prompt.get(['square'], (err, result) => {
            this.placePiece(result.square)
        })
    }

    printBoard() {
        console.log(`\n| ${this.board[0]} | ${this.board[1]} | ${this.board[2]} |\n --- --- --- \n| ${this.board[3]} | ${this.board[4]} | ${this.board[5]} |\n --- --- --- \n| ${this.board[6]} | ${this.board[7]} | ${this.board[8]} |\n`)
    }

    placePiece(number) {
        // check if number has been toggled
        if (typeof this.board[number - 1] === 'number') {
            this.board[number-1] = this.turn;
            this.count++;
            this.printBoard();
            if (this.count >= 5) {
                this.checkWinner();
            }
            if (!this.win) {
                if (this.turn === 'X') {
                    this.turn = 'O';
                } else {
                    this.turn = 'X';
                }
                prompt.message = `${this.turn}'s turn!`;
                prompt.get(['square'], (err, result) => {
                    this.placePiece(result.square);
                })
            }
        } else {
            console.log('error! pick a different square');
            prompt.get(['square'], (err, result) => {
                this.placePiece(result.square);
            })
        }
    }

    restart(yesOrNo) {
        if (yesOrNo === 'y') {
            this.reset();
        }
        if (yesOrNo === 'n') {
            return;
        }
    }

    checkWinner() {
        if (this.board[0] === this.turn && this.board[1] === this.turn && this.board[2] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.board[3] === this.turn && this.board[4] === this.turn && this.board[5] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.board[6] === this.turn && this.board[7] === this.turn && this.board[8] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.board[0] === this.turn && this.board[3] === this.turn && this.board[6] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.board[1] === this.turn && this.board[4] === this.turn && this.board[7] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.board[2] === this.turn && this.board[5] === this.turn && this.board[8] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.board[0] === this.turn && this.board[4] === this.turn && this.board[8] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.board[2] === this.turn && this.board[4] === this.turn && this.board[6] === this.turn) {
            console.log(this.turn + ' wins!');
            this.win = true;
        }
        if (this.win) {
            prompt.message = "restart? type y"
            prompt.get(['enter'], (err, result) => {
                this.restart(result.enter);
            })
        }
    }
}

const ticTacToe = new ttt;