import Cell from "../Cell/Cell";
import CellColor from "../Cell/CellColor";
import Figure from "../Figure/Figure";
import rookIcon from '../../../presentation/assets/svg/rook.svg'
import FigureColor from "../Figure/FigureColor";

export type RowsT = Cell[][]

export default class Board {
   private readonly _rows: RowsT = []

   private addRows(): void {

      for (let i = 0; i < 8; i++) {
         this._rows[i] = [];

         for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
               this._rows[i].push(new Cell(CellColor.Green, null, j, i))
            } else {
               this._rows[i].push(new Cell(CellColor.Yellow, null, j, i))
            }
         }
      }
   }

   public getCell = (x: number, y: number): Cell => {
      return this._rows[y][x]
   }

   private addFigures() {
      new Figure(rookIcon, FigureColor.White, this.getCell(0, 0))
   }

   public get rows() {
      return this._rows
   }

   public initialAction() {
      this.addRows()
      this.addFigures()
   }
}
