import {Component} from "react";
import CellEntity from "../../../../data/entity/Cell/Cell";
import CellColor from "../../../../data/entity/Cell/CellColor";
import {Wrapper, Icon} from './styles'

type PropsT = {
   data: CellEntity
}

class Cell extends Component<PropsT, unknown> {
   constructor(props: PropsT) {
      super(props);
   }

   render() {
      const {color, figure} = this.props.data;

      return <Wrapper isYellow={color === CellColor.Yellow}>
         {figure && <Icon icon={figure.icon}/>}
      </Wrapper>
   }
}

export default Cell
