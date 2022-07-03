import {Component} from 'react'
import {ThemeProvider} from "styled-components";


class Theme extends Component {

   render() {
      const {children} = this.props

      return
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
   }
}

export default Theme
