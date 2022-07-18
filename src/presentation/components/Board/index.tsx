import {Component} from "react";
import BoardEntity, {RowsT} from "../../../data/entity/Board/Board";
import CellEntity from '../../../data/entity/Cell/Cell'
import Cell from './Cell'
import {TRow, TBody, Wrapper} from './styles'

type BoardStateT = {
   rows: RowsT
   activeCellId: CellEntity['id']
}

class Board extends Component<unknown, BoardStateT> {
   constructor(props: unknown) {
      super(props)

      this.state = {rows: this.gameBoard.rows, activeCellId: ''}
   }

   get gameBoard(): BoardEntity {
      const board = new BoardEntity();
      board.initialAction()

      return board
   }

   handleCellClick = (cellId: CellEntity['id']) => {
      this.setState({...this.state, activeCellId: cellId})
   }

   render() {
      const {activeCellId} =  this.state

      return <Wrapper>
         <TBody>
            {this.state.rows.map((cells, index) => <TRow key={index}>{cells.map((cell) =>
                  <Cell isActive = {activeCellId === cell.id} onClick = {this.handleCellClick} key={cell.id} data={cell}/>
               )}
               </TRow>
            )}
         </TBody>
      </Wrapper>
   }
}

export default Board
