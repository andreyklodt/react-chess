import Cell from "../Cell/Cell";
import CellColor from "../Cell/CellColor";
export default class Board {
    constructor() {
        this._rows = [];
        this.getCell = (x, y) => {
            return this._rows[y][x];
        };
    }
    addRows() {
        for (let i = 0; i < 8; i++) {
            this._rows[i] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    this._rows[i].push(new Cell(CellColor.Green, null, j, i));
                }
                else {
                    this._rows[i].push(new Cell(CellColor.Yellow, null, j, i));
                }
            }
        }
    }
    addFigures() {
    }
    get rows() {
        return this._rows;
    }
    initialAction() {
        this.addRows();
    }
}
