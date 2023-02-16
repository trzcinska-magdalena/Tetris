import { Model } from "./Model2.js";
import { View } from "./View2.js";


// łącznikiem między modelem (danymi) a widokiem (tym, co widzi użytkownik).
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

    }

    start() {
        let block = Math.floor(Math.random() * this.model.getStyles().length);

        this.view.changeStyleOfBlock(this.model.getStyles()[block], this.model.getBlocks()[0], 0, this.model.getStartCell());
        this.timer();
    }

    timer() {
        let timer = setInterval(() => {
            let rotateId = this.model.getRotateId();
            
            
                
            if(this.view.checkNextMove(this.model.getBlocks()[0], rotateId, this.model.getStartCell())) {
                this.view.changeStyleOfBlock('', this.model.getBlocks()[0], 0, this.model.getStartCell());
                
                let row = this.model.getStartCell().row;
                this.model.setRow(row++);
                this.model.setRow(this.model.getStartCell());
                this.view.changeStyleOfBlock(this.model.getStyles()[0], this.model.getBlocks()[0], 0, this.model.getStartCell());
            } else {
                console.log('stop');
                this.model.setRow(1);
                this.model.setCol(3);
    
                //let blockRandom = Math.floor(Math.random() * blocks.length);
                //timerrrr(blocks[blockRandom]);
                clearInterval(timer);
            }
        }, 1000);
    }

    handleKeyDown(event) {
        let left = 37;
        let right = 39;
        let rotate = 90; //Z

        //change into switch
        switch(event.keyCode) {
            case left:
                console.log('left');
                break;
            case right:
                console.log('right');
                break;
            case rotate:
                console.log('rotate');
                break;
        }

        /*
        if (event.keyCode === left) {
            clear(block_I, mmmm);
            colSt--;
            draw(block_I, mmmm);
        }
        if (event.keyCode === right) {
            clear(block_I, mmmm);
            colSt++;
            draw(block_I, mmmm);
        }
        if (event.keyCode === rotate) {
            clear(block_I, mmmm);
            mmmm++;
            //draw(block_I, mmmm);
        }
        */
    }
}

const controller = new Controller(new Model(), new View());
