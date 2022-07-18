import Cell from "../Cell/Cell";
import Figure from "./Figure";
import FigureColor from "./FigureColor";
import whiteIcon from '../../../presentation/assets/svg/king-white.svg'
import blackIcon from '../../../presentation/assets/svg/king-black.svg'

export default class King extends Figure {
   constructor(color: FigureColor, cell: Cell) {
      super(color, cell);
      this.icon = color === FigureColor.White ? whiteIcon : blackIcon
   }
}
