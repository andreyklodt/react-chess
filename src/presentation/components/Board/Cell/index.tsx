import {Component} from "react";
import {Icon, Wrapper} from './styles'
import CellColor from "../../../../data/entity/Cell/CellColor";
import CellEntity from '../../../../data/entity/Cell/Cell'

type PropsT = {
   data: CellEntity
   onClick: (cellId: CellEntity['id']) => void
   isActive: boolean
}

class Cell extends Component<PropsT, unknown> {
   constructor(props: PropsT) {
      super(props);
   }

   render() {
      const {data, onClick, isActive} = this.props
      const {color, figure, id} = data;

      return <Wrapper isActive = {isActive} onClick={() => onClick(id)} isYellow={color === CellColor.Yellow}>
         {figure?.icon && <Icon icon={figure.icon}/>}
      </Wrapper>
   }
}

export default Cell
