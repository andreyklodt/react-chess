import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from "react";
import CellColor from "../../../../data/entity/Cell/CellColor";
import { Wrapper, Icon } from './styles';
class Cell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { color, figure } = this.props.data;
        return _jsx(Wrapper, Object.assign({ isYellow: color === CellColor.Yellow }, { children: figure && _jsx(Icon, { icon: figure.icon }, void 0) }), void 0);
    }
}
export default Cell;
