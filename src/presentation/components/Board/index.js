import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
import BoardEntity from "../../../data/entity/Board/Board";
import Cell from './Cell';
import { TRow, TBody, Wrapper } from './styles';
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { rows: this.gameBoard.rows };
    }
    get gameBoard() {
        const board = new BoardEntity();
        board.initialAction();
        return board;
    }
    render() {
        return _jsx(Wrapper, { children: _jsx(TBody, { children: this.state.rows.map((cells, index) => _jsx(TRow, { children: cells.map((cell) => _jsx(Cell, { data: cell }, cell.x + cell.y)) }, index)) }, void 0) }, void 0);
    }
}
export default Board;
