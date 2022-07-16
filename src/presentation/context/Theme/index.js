import { jsx as _jsx } from "react/jsx-runtime";
import { Component, createContext } from 'react';
import { ThemeProvider } from "styled-components";
import ThemeVariant from "./ThemeVariant";
import themes from './themes';
export const ThemeContext = createContext({});
class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTheme: ThemeVariant.Light
        };
        this.setTheme = this.setTheme.bind(this);
    }
    setTheme(currentTheme) {
        this.setState({ currentTheme });
    }
    render() {
        const contextValue = { setTheme: this.setTheme, themeVariant: this.state.currentTheme };
        return (_jsx(ThemeContext.Provider, Object.assign({ value: contextValue }, { children: _jsx(ThemeProvider, Object.assign({ theme: themes[this.state.currentTheme] }, { children: this.props.children }), void 0) }), void 0));
    }
}
export default Theme;
