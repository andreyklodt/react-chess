import Cell from "../Cell/Cell";
import CellColor from "../Cell/CellColor";
import FigureColor from "../Figure/FigureColor";
import Rook from "../Figure/Rook";
import Knight from "../Figure/Knight";
import Bishop from "../Figure/Bishop";
import Queen from "../Figure/Queen";
import King from "../Figure/King";
import Pawn from "../Figure/Pawn";

export type RowsT = Cell[][]

export default class Board {
   private readonly _rows: RowsT = []

   private _getCell = (x: number, y: number): Cell => {
      return this._rows[y][x]
   }

   private _addPawns(row: 2 | 7, color: FigureColor) {
      for (let i = 0; i < 8; i++) {
         new Pawn(color, this._getCell(i, row))
      }
   }

   private _addOtherFigures(row: 1 | 8, color: FigureColor) {
      new Rook(color, this._getCell(0, row))
      new Rook(color, this._getCell(7, row))

      new Knight( color, this._getCell(1, row))
      new Knight( color, this._getCell(6, row))

      new Bishop( color, this._getCell(2, row))
      new Bishop( color, this._getCell(5, row))

      new Queen(color, this._getCell(3, row))
      new King(color, this._getCell(4, row))
   }

   private _addFigures() {
      this._addPawns(2, FigureColor.Black)
      this._addPawns(7, FigureColor.White)
      this._addOtherFigures(1, FigureColor.Black)
      this._addOtherFigures(8, FigureColor.White)
   }

   private _addRows(): void {

      for (let i = 1; i <= 8; i++) {
         this._rows[i] = [];

         for (let j = 1; j <= 8; j++) {
            if ((i + j) % 2 === 0) {
               this._rows[i].push(new Cell(CellColor.Green, null, j, i))
            } else {
               this._rows[i].push(new Cell(CellColor.Yellow, null, j, i))
            }
         }
      }
   }

   public get rows() {
      return this._rows
   }

   public initialAction() {
      this._addRows()
      this._addFigures()
   }
}
