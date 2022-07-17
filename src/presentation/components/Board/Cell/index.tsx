import {Component} from "react";
import CellEntity from "../../../../data/entity/Cell/Cell";
import CellColor from "../../../../data/entity/Cell/CellColor";
import {Icon, Wrapper} from './styles'
import FigureColor from "../../../../data/entity/Figure/FigureColor";

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
         {figure && <Icon isInverted = {figure.color === FigureColor.White} icon={figure.icon}/>}
      </Wrapper>
   }
}

export default Cell
