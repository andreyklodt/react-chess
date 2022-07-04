// https://tailwindcss.com/docs/customizing-colors#default-color-palette
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createPalette.js
// https://github.com/mui/material-ui/tree/master/packages/mui-material/src/colors
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
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
         c50: '#f8f8f8',
         c100: '#f8f8f8',
         c200: '#f8f8f8',
         c300: '#f8f8f8',
         c400: '#f8f8f8',
         c500: '#f8f8f8',
         c600: '#f8f8f8',
         c700: '#f8f8f8',
         c800: '#f8f8f8',
         c900: '#f8f8f8',
         A100: '#f8f8f8',
         A200: '#f8f8f8',
         A400: '#f8f8f8',
         A700: '#f8f8f8',
      },
      // background: {},
      // // default colors
      // red: {},
      // black: {},
      // grey: {},
      // action: {
      //    button: {
      //       active: '#f8f8f8',
      //       hover: '#f8f8f8',
      //       disabled: '#f8f8f8',
      //       focus: '#f8f8f8',
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

