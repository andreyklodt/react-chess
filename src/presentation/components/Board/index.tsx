import {Component, ReactElement} from "react";
import {Wrapper, TCell, TRow} from './styles'

const CELLS_TOTAL_AMOUNT = 64;

type RowT = {
   id: number,
   cells: ReactElement[]
}

type BoardStateT = {
   rows: RowT[]
}

class Board extends Component<unknown, BoardStateT> {
   constructor(props: unknown) {
      super(props)

      this.state = {rows: []}
   }

   componentDidMount() {
      this.setState({rows: this.formRows()})
   }

   formRows(): RowT[] {
      const rows: RowT[] = [{cells: [], id: 0}]
      let i = 0;

      while (i < CELLS_TOTAL_AMOUNT) {
         const lastRowIndex = rows.length - 1;
         const lastRowLength = rows[lastRowIndex].cells.length
         if (lastRowLength < 8) {
            rows[lastRowIndex].cells.push(<TCell/>)
         } else {
            rows.push({cells: [<TCell/>], id: lastRowIndex + 1})
         }

         i += 1;
      }

      return rows
   }

   render() {
      return <Wrapper>
         {this.state.rows.map(({cells, id}) => <TRow key={id}>{cells}</TRow>)}
      </Wrapper>
   }
}

export default Board
