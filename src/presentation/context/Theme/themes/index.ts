import ThemeVariant from "../ThemeVariant";
import darkTheme from './dark'
import lightTheme from './light'
import {IColors} from "./defaultColors";

export interface ITheme {
   colors: IColors,
   transitions: {
      short: number,
      standard: number,
      long: number
   }
   // todo доработать блок
   zIndex: {
      block: number
   }
}

const themes: Record<ThemeVariant, ITheme> = {
   [ThemeVariant.Dark]: darkTheme,
   [ThemeVariant.Light]: lightTheme
}

export default themes

