let colSt = 3;
let rowSt = 1;
let mmmm = 0;

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



let block_Z = [[1,1,0],
                [0,1,1]];
let block_J = [[1,0,0],
                [1,1,1]];
let block_L = [[0,0,1],
                [1,1,1]];

let blocks = [block_I, block_O, block_T, block_S];














let nameOfStyle = ['zircon', 'floral', 'cashmere', 'miami', 'infantry', 'majestic', 'transparent'];
let random;

//start();

function draw(blockType, i) {
    for(let p = 0; p < blockType[i].length; p++) {
        let r = parseInt(blockType[i][p].row) + rowSt;
        row = document.getElementById('tr-' + r);
        console.log(row);
        row = Array.from(row.children);
        row[blockType[i][p].col + colSt].className = nameOfStyle[random];
    }
}

function clear(blockType, i) {
    for(let p = 0; p < blockType[i].length; p++) {
        let r = parseInt(blockType[i][p].row) + rowSt;
        console.log(r);
        row = document.getElementById('tr-' + r);
        console.log(row);
        row = Array.from(row.children);
        row[blockType[i][p].col + colSt].className = '';
    }
}


function check(blockType, i) {
    if(rowSt == 13) return false;

    const unique = blockType[i].filter(
        (obj, index) =>
        blockType[i].findIndex((item) => item.col === obj.col) === index
      );
      console.log(unique);

    for(let p = 0; p < unique.length; p++) {
        let r = parseInt(unique[p].row)+rowSt+1;
        row = document.getElementById('tr-' + r);
        row = Array.from(row.children);
        if(row[unique[p].col + colSt].className != '') {
            return false;
        }
    }
    return true;
}

function isTheLineBusy (nameOfId) {
    let row = document.getElementById(nameOfId);
    return Array.from(row.children).find(el => el.className == '') ? false : true;
}

function clearRow(nameOfId) {
    let row = document.getElementById(nameOfId);
    Array.from(row.children).forEach(el => el.className = '');
}

function start() {
    random = Math.floor(Math.random() * nameOfStyle.length);
    draw(block_I, mmmm);

    let timer = setInterval(() => {
        console.log('timer ' + mmmm)
        if(check(block_I, mmmm)) {
            clear(block_I, mmmm);
            rowSt++;
            draw(block_I, mmmm);
        } else {
            console.log('stop');
            rowSt = 1;
            colSt = 3;

            let blockRandom = Math.floor(Math.random() * blocks.length);
            timerrrr(blocks[blockRandom]);
            clearInterval(timer);
        }
    }, 1000);
}

function timerrrr(block) {
    let timer = setInterval(() => {
        console.log('timer ' + mmmm)
        if(check(block, mmmm)) {
            clear(block, mmmm);
            rowSt++;
            draw(block, mmmm);
            
        } else {
            console.log('stop');
            rowSt = 1;
            colSt = 3;
            mmmm = 0;

            let blockRandom = Math.floor(Math.random() * blocks.length);
            timerrrr(blocks[blockRandom]);

            clearInterval(timer);
        }
    }, 1000);
}

addEventListener('keydown', (event) => {
    let left = 37;
    let right = 39;
    let rotate = 90; //Z
    
    if(event.keyCode === left) {
        clear(block_I, mmmm);
        colSt--;
        draw(block_I, mmmm);
    }
    if(event.keyCode === right) {
        clear(block_I, mmmm);
        colSt++;
        draw(block_I, mmmm);
    }
    if(event.keyCode === rotate) {
        clear(block_I, mmmm);
        mmmm++;
        //draw(block_I, mmmm);
    }
});
