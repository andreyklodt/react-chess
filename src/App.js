import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import Theme from "./presentation/context/Theme";
import Board from "./presentation/components/Board";
import { GlobalStyle, Layout } from './styles';
class App extends Component {
    render() {
        return _jsx(_Fragment, { children: _jsxs(Theme, { children: [_jsx(GlobalStyle, {}, void 0), _jsx(Layout, { children: _jsx(Board, {}, void 0) }, void 0)] }, void 0) }, void 0);
    }
}
export default App;
