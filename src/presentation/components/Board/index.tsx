import {Component} from "react";
import ThemeVariant from "../../data/entity/ThemeVariant";
import {ThemeContext} from "../../context/Theme";
import {ThemeButton, Wrapper} from './styles'

class Board extends Component {

   render() {

      return <ThemeContext.Consumer>
         {({setTheme}) =>
            <Wrapper>
               <ThemeButton onClick={() => setTheme(ThemeVariant.Light)}>enable light theme</ThemeButton>
               <ThemeButton onClick={() => setTheme(ThemeVariant.Dark)}>enable dark theme</ThemeButton>
            </Wrapper>
         }
      </ThemeContext.Consumer>
   }
}

export default Board
