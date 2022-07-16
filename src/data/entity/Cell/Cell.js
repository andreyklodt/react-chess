export default class Cell {
    constructor(color, figure, x, y) {
        this.color = color;
        this.figure = figure;
        this.x = x;
        this.y = y;
    }
    setFigure(item) {
        this.figure = item;
    }
}
