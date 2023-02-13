export class View {
    nameOfColors = ['zircon', 'floral', 'cashmere', 'miami', 'infantry', 'majestic', 'transparent'];

    constructor() {
        this.board = document.querySelectorAll(".board table")[0];
        this.score = document.getElementsByClassName('board__level--score')[0];
        this.lines = document.getElementsByClassName('board__line--score')[0];
        this.whichNext = document.querySelectorAll('.board__next--block table')[0];

        this.startBoard();
        //this.clearBoard();
        //this.clearRow(1);
        //this.addLine();
    }

    uploadPanel(score, lines) {
        this.score.innerHTML = score;
        this.lines.innerHTML = lines;
    }

    startBoard() {
        this.clearBoard(this.board);
        this.clearBoard(this.whichNext);
    }

    clearBoard(board) {
        Array.from(board.rows).forEach(function(row) {
            Array.from(row.cells).forEach(cell => cell.className = '')
        });
    }

    clearRow(id) {
        let row = this.board.rows[id];
        Array.from(row.children).forEach(cell => cell.className = '');
    }
}