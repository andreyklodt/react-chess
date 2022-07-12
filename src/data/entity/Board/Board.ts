import Cell from "../Cell/Cell";
import CellColor from "../Cell/CellColor";

export type RowsT = Cell[][]

export default class Board {
   private readonly _rows: RowsT = []

   private addRows() {
      for (let i = 0; i < 8; i++) {
         this._rows[i] = [];

         for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0){
               this._rows[i].push(new Cell(CellColor.Green, null))
            }else{
               this._rows[i].push(new Cell(CellColor.Yellow, null))
            }
         }
      }
   }

   public get rows() {
      return this._rows
   }

   public initialAction() {
      this.addRows()
   }
}
