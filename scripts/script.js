const board = document.querySelectorAll(".board table")[0];
const score = document.getElementsByClassName('board__level--score')[0];
const lines = document.getElementsByClassName('board__line--score')[0];
const whichNext = document.querySelectorAll('.board__next--block table')[0];

const block_I = [
    [{'col': 0,'row': 0}, 
    {'col': 1, 'row': 0}, 
    {'col': 2, 'row': 0}, 
    {'col': 3, 'row': 0}],

    [{'col': 1, 'row': 2},
    {'col': 1,'row': -1}, 
    {'col': 1, 'row': 0}, 
    {'col': 1, 'row': 1}],

    [{'col': 0,'row': 0}, 
    {'col': 1, 'row': 0}, 
    {'col': 2, 'row': 0}, 
    {'col': 3, 'row': 0}],

    [{'col': 1, 'row': 2},
    {'col': 1,'row': -1}, 
    {'col': 1, 'row': 0}, 
    {'col': 1, 'row': 1}],
];

const block_O = [
    [{'col': 0, 'row': 1},
    {'col': 0,'row': 0},  
    {'col': 1, 'row': 1}, 
    {'col': 1, 'row': 0}],

    [{'col': 0, 'row': 1},
    {'col': 0,'row': 0},  
    {'col': 1, 'row': 1}, 
    {'col': 1, 'row': 0}],

    [{'col': 0, 'row': 1},
    {'col': 0,'row': 0},  
    {'col': 1, 'row': 1}, 
    {'col': 1, 'row': 0}],

    [{'col': 0, 'row': 1},
    {'col': 0,'row': 0},  
    {'col': 1, 'row': 1}, 
    {'col': 1, 'row': 0}]
];

const block_T = [
    [{'col': 1,'row': 1}, 
    {'col': 1, 'row': 0},
    {'col': 0, 'row': 1}, 
    {'col': 2, 'row': 1}],

    [{'col': 1,'row': 2}, 
    {'col': 1, 'row': 1}, 
    {'col': 2, 'row': 1}, 
    {'col': 1, 'row': 0}],

    [{'col': 0,'row': 1}, 
    {'col': 1, 'row': 2}, 
    {'col': 2, 'row': 1}, 
    {'col': 1, 'row': 1}],

    [{'col': 1,'row': 2}, 
    {'col': 0, 'row': 1}, 
    {'col': 1, 'row': 1}, 
    {'col': 1, 'row': 0}],
];

const block_S = [
    [{'col': 1,'row': 1}, 
    {'col': 0, 'row': 1}, 
    {'col': 1, 'row': 0}, 
    {'col': 2, 'row': 1}],

    [{'col': 1,'row': 2}, 
    {'col': 1, 'row': 1}, 
    {'col': 2, 'row': 1}, 
    {'col': 1, 'row': 0}],

    [{'col': 0,'row': 1}, 
    {'col': 1, 'row': 2}, 
    {'col': 2, 'row': 1}, 
    {'col': 1, 'row': 1}],

    [{'col': 1,'row': 2}, 
    {'col': 0, 'row': 1}, 
    {'col': 1, 'row': 1}, 
    {'col': 1, 'row': 0}],
];

const block_Z = [[1,1,0], [0,1,1]];
const block_J = [[1,0,0], [1,1,1]];
const block_L = [[0,0,1], [1,1,1]];

const blocks = [block_I, block_O, block_T, block_S];


const styles = ['zircon', 'floral', 'cashmere', 'miami'];
//'infantry', 'majestic', 'transparent'

const button = document.getElementsByClassName('btn')[0];

let startCell = {
    row: 0,
    column: 3
}

let state = {
    score: 0,
    lines: 0
}; 

let rotateId = 0;
let blockId;
let nextBlockId;
let isPlaying = false;


button.addEventListener("click", start);
function start() {
    document.addEventListener("keydown", handleKeyDown);

    clearBoard(whichNext);
    uploadPanel(state);

    blockId = Math.floor(Math.random() * styles.length);

    changeStyleOfBlock(styles[blockId]);
    timer();
}

function timer() {
    nextBlockId = Math.floor(Math.random() * styles.length);
    nextBlock(nextBlockId);
    let timer = setInterval(() => {
        if(checkNextMove()) {
            changeStyleOfBlock('');
            setRow(startCell.row+1);
            changeStyleOfBlock(styles[blockId]);
        } else {
            setRow(0);
            setCol(3);

            blockId = nextBlockId;
            //timer();
            nextBlockId = Math.floor(Math.random() * styles.length);
            nextBlock(nextBlockId);
            //clearInterval(timer);
        }
    }, 800);
}

function nextBlock(next) {
    let blockType = blocks[next];
    let style = styles[next];

    clearBoard(whichNext);

    blockType[0].forEach(type => {
        let rowId = parseInt(type.row+1);
        let row = getRow(rowId, whichNext);
        row[type.col].className = style;
    });
}

function handleKeyDown(event) {
    let left = 37;
    let right = 39;
    let rotate = 90; //Z

    switch(event.keyCode) {
        case left:
            console.log('left');
            changeStyleOfBlock('');
            if(startCell.column != 0) {
                startCell.column--;
                startCell.row--;
            }
            break;
        case right:
            console.log('right');
            changeStyleOfBlock('');

            let block = blocks[blockId];
            let rotate = block[rotateId];
            let maxCol = Math.max(...rotate.map(o => o.col));
            if(startCell.column+maxCol < 9) {
                startCell.column++;
                startCell.row--;
            }
            break;
        //case rotate:
            //console.log('rotate');
            //this.board.changeStyleOfBlock('');
            //this.board.setRotateId();
            //break;
    }
}

function setRow(row) {
    startCell['row'] = row;  
}

function setCol(col) {
    startCell['column'] = col;  
}

function setPanel(score, lines) {
    state.score = score;
    state.line = lines;
}

function uploadPanel(state) {
    score.innerHTML = state.score;
    lines.innerHTML = state.lines;
}

function getRow(rowId, table) {
    let row = Array.from(table.rows)[rowId];
    row = Array.from(row.children);
    return row;
}

function clearBoard(table) {
    Array.from(table.rows).forEach(function(row) {
        Array.from(row.cells).forEach(cell => cell.className = '')
    });
}

function setRotateId() {
    if(rotateId < 3) rotateId++;
    else rotateId = 0;
}

function clearRow(id) {
    let row = getRow(id, board);
    row.forEach(cell => cell.className = '');
}

function checkLine() { //todo
    Array.from(board.rows).forEach(rows => {
        let row = Array.from(rows.children);
    });
}

function isTheLineBusy (id) {
    let row = getRow(id, board);
    return row.find(el => el.className == '') ? false : true;
}
    
function changeStyleOfBlock(style) {
    let blockType = blocks[blockId];

    blockType[rotateId].forEach(type => {
        let rowId = parseInt(type.row) + startCell.row;
        let row = getRow(rowId, board);
        row[type.col + startCell.column].className = style;
    });
}

function checkNextMove() { // todo
    let blockType = blocks[blockId];
    let i = rotateId;
    console.log(startCell);
    if((blockType != block_I && startCell.row == 11) || (blockType == block_I && startCell.row == 12)) return false;
    const unique = blockType[i].filter(
        (obj, index) =>
        blockType[i].findIndex((item) => item.col === obj.col) === index
      );

      return unique.every(el => {
        let rowId = parseInt(el.row) + startCell.row + 1;
        let row = getRow(rowId, board);
        return !row[el.col + startCell.column].className;
    });
}