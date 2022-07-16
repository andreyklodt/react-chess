import defaultColors from "./defaultColors";
import defaultTheme from "./defaultTheme";
import {ITheme} from "./";

const theme: ITheme = {
   ...defaultTheme,
   colors: {
      ...defaultColors,

      background: {
         c500: '#312E2B',
         c700: '#272522',
         c800: '#22201D',
         c900: '#1C1A18'
      },
      text: {
         c500: '#3A3A3A',
      },
   },
}

export default theme

