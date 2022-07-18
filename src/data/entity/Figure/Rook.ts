import Cell from "../Cell/Cell";
import Figure from "./Figure";
import FigureColor from "./FigureColor";
import whiteIcon from '../../../presentation/assets/svg/rook-white.svg'
import blackIcon from '../../../presentation/assets/svg/rook-black.svg'

export default class Rook extends Figure {
   constructor(color: FigureColor, cell: Cell) {
      super(color, cell);
      this.icon = color === FigureColor.White ? whiteIcon : blackIcon
   }
}
