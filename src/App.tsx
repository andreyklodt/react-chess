import React, {Component} from 'react'
import {ThemeProvider} from "styled-components";
import Board from 'presentation/components/Board'
import {Layout, GlobalStyle} from './styles'
import theme from "presentation/context/theme";

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
