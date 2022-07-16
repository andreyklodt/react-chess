import {ITheme} from "./index";

const defaultTheme:Omit<ITheme, 'colors'> = {
   transitions: {
      short: 200,
      standard: 300,
      long: 375
   },
   // todo доработать блок z-index`ов
   zIndex: {
      block: -1
   }
}

export default defaultTheme
