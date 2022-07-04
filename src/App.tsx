import React, {Component} from 'react'
import Theme from "./presentation/context/Theme";
import Board from "./presentation/components/Board";
import {GlobalStyle, Layout} from './styles'

class App extends Component {

   render() {

      return <>
         <Theme>
            <GlobalStyle/>
            <Layout>
               <Board/>
            </Layout>
         </Theme>
      </>
   }
}

export default App
