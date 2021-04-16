import Snake from "./snake.js"

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {}

    create() {
        this.snake = new Snake(this);
    }

    update(time) {
        this.snake.update(time);
    }
}