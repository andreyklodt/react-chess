import CellColor from './CellColor'
import Figure from '../Figure/Figure'

export default class Cell {

   constructor(public readonly color: CellColor,
               public figure: Figure | null,
               public readonly x: number,
               public readonly y: number
   ) {}
}
