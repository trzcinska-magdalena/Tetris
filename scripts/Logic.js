import { Board } from "./Board.js";
import { Panel } from "./Panel.js";

class Logic {
    constructor() {
        this.isPlaying = false;

        //document.addEventListener("keydown", this.handleKeyDown.bind(this));

        this.button = document.getElementsByClassName('btn')[0];
        //his.button.addEventListener("click", this.start.bind(this));
    }

    clearBoard(table) {
        Array.from(table.rows).forEach(function(row) {
            Array.from(row.cells).forEach(cell => cell.className = '')
        });
    }
}

const logic = new Logic();
new Board(logic);
new Panel(logic);