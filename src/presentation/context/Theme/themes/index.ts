import ThemeVariant from "../ThemeVariant";
import darkTheme from './dark'
import lightTheme from './light'

export type ThemeT = {
   colors: ColorsT,
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

const themes: Record<ThemeVariant, ThemeT> = {
   [ThemeVariant.Dark]: darkTheme,
   [ThemeVariant.Light]: lightTheme
}

export default themes

