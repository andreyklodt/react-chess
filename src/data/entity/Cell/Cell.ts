import {nanoid} from 'nanoid'
import CellColor from './CellColor'
import Figure from '../Figure/Figure'

export default class Cell {
   public figure: Figure | null
   public readonly color: CellColor
   public readonly x: number
   public readonly y: number
   public readonly id: string

   constructor(color: CellColor, figure: Figure | null, x: number, y: number) {
      this.color = color
      this.figure = figure
      this.x = x
      this.y = y
      this.id = nanoid()
   }
}
