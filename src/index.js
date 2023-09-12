import Asteroid from "./asteroid";
import MovingObject from "./movingObject";
import Game from "./game";
import GameView from "./gameView";

const canvasEl = document.getElementById('game-canvas');
canvasEl.width = Game.DIM_X;
canvasEl.height = Game.DIM_Y;
const ctx = canvasEl.getContext('2d');

const gameView = new GameView(ctx);
gameView.start()
window.GameView = GameView;

// const mo = new MovingObject({
//     pos: [120, 130],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });
// mo.draw(ctx)

// const asturd = new Asteroid({
//     pos: [30, 40]
// });
// asturd.draw(ctx)
// window.MovingObject = MovingObject;

// const game = new Game();
// game.draw(ctx);
// window.Game = Game;

