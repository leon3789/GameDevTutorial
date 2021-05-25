import Paddle from "/src/paddle";

import InputHandler from "/src/input.js";

import Ball from "/src/ball.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const gameWidth = 800;
const gameHeight = 600;

let paddle = new Paddle(gameWidth, gameHeight);
let ball = new Ball();

paddle.draw(ctx);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;

  ctx.clearRect(0, 0, gameWidth, gameHeight);

  paddle.update(deltaTime);

  paddle.draw(ctx);

  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
