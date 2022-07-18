import Cell from "../Cell/Cell";
import Figure from "./Figure";
import FigureColor from "./FigureColor";
import whiteIcon from '../../../presentation/assets/svg/bishop-white.svg'
import blackIcon from '../../../presentation/assets/svg/bishop-black.svg'

export default class Bishop extends Figure {
   constructor(color: FigureColor, cell: Cell) {
      super(color, cell);
      this.icon = color === FigureColor.White ? whiteIcon : blackIcon
   }
}
