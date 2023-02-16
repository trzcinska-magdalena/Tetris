// DOM, elementach HTML, CSS i tym podobnych. Wszystko, co jest z nim związane, powinno być widoczne.

export class View {

    changeStyleOfBlock(style, blockType, i, startCell) {
        blockType[i].forEach(type => {
            let row = parseInt(type.row) + startCell.row;
            row = Array.from(this.board.rows)[row];
            row = Array.from(row.children);
            row[type.col + startCell.column].className = style;
        });
    }

    checkNextMove(blockType, i, startCell) {
        //if(startCell.row == 13) return false;
        let flaga;
        const unique = blockType[i].filter(
            (obj, index) =>
            blockType[i].findIndex((item) => item.col === obj.col) === index
          );

        unique.forEach(el => {
            console.log(el.row);
            console.log(startCell);

            let row = parseInt(el.row) + startCell.row + 1;
            console.log(row);
            row = Array.from(this.board.rows)[row];
            console.log(row);
            row = Array.from(row.children);

            //if(row[el.col + startCell.cel].className != '') return false;
            //else return true;
            return true;
        });
        return true;
    }
}