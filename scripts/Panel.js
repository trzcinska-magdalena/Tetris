export class Panel {
    constructor(logic) {
        this.logic = logic;

        this.score = document.getElementsByClassName('board__level--score')[0];
        this.lines = document.getElementsByClassName('board__line--score')[0];
        this.whichNext = document.querySelectorAll('.board__next--block table')[0];

        this.state = {
            score: 0,
            line: 0
        };

        this.nextBlockId;

        this.start();
    }

    start() {
        this.logic.clearBoard(this.whichNext);
        this.uploadPanel(this.state);
    }

    uploadPanel(state) {
        this.score.innerHTML = state.score;
        this.lines.innerHTML = state.lines;
    }

    setPanel(score, lines) {
        this.state.score = score;
        this.state.line = lines;
    }

    getNextBlock() {
        return this.whichNext;
    }

    setNextBlock(id) {
        this.nextBlockId = id;
    }

    showNextBlock(style, blockType, startCell) {
        blockType[0].forEach(type => {
            let row = parseInt(type.row) + startCell.row;
            row = Array.from(this.board.rows)[row];
            row = Array.from(row.children);
            row[type.col + startCell.column].className = style;
        });
    }
}