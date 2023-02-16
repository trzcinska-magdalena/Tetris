export class Board {
    constructor(logic) {
        this.logic = logic;

        this.board = document.querySelectorAll(".board table")[0];
        this.styles = ['zircon', 'floral', 'cashmere', 'miami', 'infantry', 'majestic', 'transparent'];

        this.startCell = {
            row: 1,
            column: 3
        }
        this.rotateId = 0;
        this.logic.clearBoard(this.board);
    }

    getBoard() {
        return this.board;
    }

    clearRow(id) {
        let row = this.board.rows[id];
        Array.from(row.children).forEach(cell => cell.className = '');
    }

    isTheLineBusy (id) {
        let row = Array.from(this.board.rows)[id];
        return Array.from(row.children).find(el => el.className == '') ? false : true;
    }

    changeStyleOfBlock(style, blockType, i, startCell) {
        blockType[i].forEach(type => {
            let row = parseInt(type.row) + startCell.row;
            row = Array.from(this.board.rows)[row];
            row = Array.from(row.children);
            row[type.col + startCell.column].className = style;
        });
    }
}