import 'styled-components'
import {ThemeT} from "./presentation/context/Theme";

declare module 'styled-components' {
   export type DefaultTheme = ThemeT
}

