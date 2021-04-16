import Snake from "./snake.js"

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() 
    {

    }

    create() {
        var g2 = this.add.grid(320, 320, 640, 640, 32, 32, 0xFFDAB9).setAltFillStyle(0xDDA0DD).setOutlineStyle();
        this.snake = new Snake(this);
    }

    update(time) {
        this.snake.update(time);
    }
}