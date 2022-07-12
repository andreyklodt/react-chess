import CellColor from './CellColor'
import Figure from '../Figure/Figure'

export default class Cell {

   constructor(public readonly color: CellColor, public readonly figure: Figure | null) {
   }

}
