import {PropsT as IconPropsT} from '../../../presentation/components/common/block/Icon'
import FigureColor from "./FigureColor";
import Cell from "../Cell/Cell";

// todo убрать IconPropsT из pesentation

export default class Figure {
   public icon: IconPropsT['icon'] | null = null;
   public readonly color: FigureColor;
   public cell: Cell;

   constructor(color: FigureColor, cell: Cell) {
      this.color = color;
      this.cell = cell;
      this.cell.figure = this
   }
}
