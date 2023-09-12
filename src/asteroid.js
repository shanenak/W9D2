// src/asteroid.js
import { randomVec } from "./util";
import MovingObject from "./movingObject";

class Asteroid extends MovingObject {
    static COLOR = 'salmon';
    static RADIUS = 25;

    constructor(options) {
        super(options)
        this.color = Asteroid.COLOR;
        this.radius = Asteroid.RADIUS;
        this.pos = options["pos"];
        let length = this.norm();
        this.vel = randomVec(length);
    }

    norm() {
        return Math.sqrt(this.pos[0]**2 + this.pos[1]**2)
    }
}


export default Asteroid;