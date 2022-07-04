import {ThemeT} from "./";

const theme: ThemeT = {
   colors: {
      // use when more than one theme
      background: {
         c500: '#312E2B',
         c700: '#272522',
         c800: '#22201D',
         c900: '#1C1A18'
      },
      text: {
         c50: '#3A3A3A',
         c100: '#3A3A3A',
         c200: '#3A3A3A',
         c300: '#3A3A3A',
         c400: '#3A3A3A',
         c500: '#3A3A3A',
         c600: '#3A3A3A',
         c700: '#3A3A3A',
         c800: '#3A3A3A',
         c900: '#3A3A3A',
         A100: '#3A3A3A',
         A200: '#3A3A3A',
         A400: '#3A3A3A',
         A700: '#3A3A3A',
      },
      // background: {},
      // // default colors
      // red: {},
      // black: {},
      // grey: {},
      // action: {
      //    button: {
      //       active: '#3A3A3A',
      //       hover: '#3A3A3A',
      //       disabled: '#3A3A3A',
      //       focus: '#3A3A3A',
      //    },
      //    link: {},
      // }
   },
   transitions: {
      short: 200,
      standard: 300,
      long: 375
   },
   // todo доработать блок
   zIndex: {
      block: -1
   }
}

export default theme

