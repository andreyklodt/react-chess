import {Component} from "react";
import CellEntity from "../../../data/entity/Cell/Cell";
import CellColor from "../../../data/entity/Cell/CellColor";
import {Wrapper} from './styles'

type PropsT = {
   data: CellEntity
}

class Cell extends Component<PropsT, unknown> {
   constructor(props:PropsT) {
      super(props);
   }

   render() {
   const {color} = this.props.data;

      return <Wrapper isYellow = {color === CellColor.Yellow}/>
   }
}

export default Cell
