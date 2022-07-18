import {Component} from "react";
import {Icon, Wrapper} from './styles'
import CellColor from "../../../../data/entity/Cell/CellColor";
import CellEntity from '../../../../data/entity/Cell/Cell'

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
         {figure?.icon && <Icon icon={figure.icon}/>}
      </Wrapper>
   }
}

export default Cell
