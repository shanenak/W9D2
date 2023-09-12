
class MovingObject {
    constructor(options) {
        this.pos = options["pos"];
        this.vel = options["vel"];
        this.radius = options["radius"];
        this.color = options["color"];
        console.log(this.pos)
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill()
        }

    moveBy() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}


export default MovingObject;