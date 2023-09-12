import Asteroid from "./asteroid";

class Game {
    static DIM_X = window.innerWidth;
    static DIM_Y = window.innerHeight;
    static NUM_ASTEROIDS = 10;

    constructor() {
        this.asteroids = [];
        this.addAsteroids();
    };

    addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.asteroids.push(new Asteroid({
                pos: this.randomPosition()})
            )
        }
    };

    randomPosition() {
        return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y]
    };

    draw(ctx) {
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        
        this.asteroids.forEach((asteroid)=> {
            asteroid.draw(ctx)
        })
    };

    moveObjects() {
        this.asteroids.forEach((asteroid) => {
            asteroid.moveBy()
        })
    };
}
export default Game;