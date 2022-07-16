import {PropsT as IconPropsT} from '../../../presentation/components/common/block/Icon'
import FigureColor from "./FigureColor";
import Cell from "../Cell/Cell";

// todo убрать IconPropsT из pesentation

export default class Figure {

   constructor(
      public readonly icon: IconPropsT['icon'],
      public readonly color: FigureColor,
      public readonly cell: Cell
   ) {
      this.cell.figure = this
   }
}
