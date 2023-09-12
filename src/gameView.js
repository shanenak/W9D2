import Game from "./game";

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game(); // maybe not a new game
    }

    start() {
        setInterval(()=>{
            this.game.draw(this.ctx);
            this.game.moveObjects();
        }, 20)
    }

}

export default GameView;