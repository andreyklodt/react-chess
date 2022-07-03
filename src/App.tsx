import React, {Component} from 'react'
import {ThemeProvider} from "styled-components";
import theme from "./presentation/context/Theme";
import Board from "./presentation/components/Board";
import {Layout, GlobalStyle} from './styles'

class App extends Component {

   render() {

      return <>
         <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Layout>
               <Board/>
            </Layout>
         </ThemeProvider>
      </>
   }
}

export default App
