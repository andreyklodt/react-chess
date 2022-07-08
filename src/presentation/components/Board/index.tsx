import {Component} from "react";
import BoardEntity, {RowsT} from "../../data/entity/Board/Board";
import Cell from './Cell'
import {TRow, Wrapper} from './styles'

type BoardStateT = {
   rows: RowsT
}

class Board extends Component<unknown, BoardStateT> {
   constructor(props: unknown) {
      super(props)

      this.state = {rows: this.gameBoard.rows}
   }

   get gameBoard(): BoardEntity {
      const board = new BoardEntity();
      board.initialAction()

      return board
   }

   render() {

      return <Wrapper>
         {this.state.rows.map((cells, index) => <TRow key={index}>{cells.map((cell) =>
               <Cell data={cell}/>
            )}
            </TRow>
         )}
      </Wrapper>
   }
}

export default Board
