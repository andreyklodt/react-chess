import {Component, createContext, ReactNode} from 'react'
import {ThemeProvider} from "styled-components";
import ThemeVariant from "../../data/entity/ThemeVariant";
import themes from './themes'

type ThemePropsT = {
   children: ReactNode
}

type ThemeStateT = {
   currentTheme: ThemeVariant
}

type ThemeContextT = {
   themeVariant: ThemeVariant
   setTheme: (currentTheme: ThemeVariant) => void
}

export const ThemeContext = createContext<ThemeContextT>({} as ThemeContextT)

class Theme extends Component<ThemePropsT, ThemeStateT> {
   constructor(props: ThemePropsT) {
      super(props)

      this.state = {
         currentTheme: ThemeVariant.Light
      }
   }

   setTheme(currentTheme: ThemeVariant) {
      this.setState({currentTheme})
   }

   render() {
      const contextValue: ThemeContextT = {setTheme: this.setTheme, themeVariant: this.state.currentTheme}

      return (
         <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={themes[this.state.currentTheme]}>
               {this.props.children}
            </ThemeProvider>
         </ThemeContext.Provider>
      )
   }
}

export default Theme
