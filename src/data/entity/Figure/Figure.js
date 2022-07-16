// todo убрать IconpropsT из pesentation
export default class Figure {
    constructor(icon, color, cell) {
        this.icon = icon;
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
    }
}
