class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.isPlaying = false;

        document.addEventListener("keydown", this.handleKeyDown(this));
    }

    startTimer() {
        
    }

    handleKeyDown(event) {
        let left = 37;
        let right = 39;
        let rotate = 90; //Z

        //change into switch

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
    }
}

const controller = new Controller(new Model(), new View());