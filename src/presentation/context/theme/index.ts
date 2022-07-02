// https://tailwindcss.com/docs/customizing-colors#default-color-palette
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createPalette.js
// https://github.com/mui/material-ui/tree/master/packages/mui-material/src/colors
// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

type ThemeT = {
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

const theme: ThemeT = {
   colors: {
      // use when more than one theme
      text: {
         50: '#3A3A3A',
         100: '#3A3A3A',
         200: '#3A3A3A',
         300: '#3A3A3A',
         400: '#3A3A3A',
         500: '#3A3A3A',
         600: '#3A3A3A',
         700: '#3A3A3A',
         800: '#3A3A3A',
         900: '#3A3A3A',
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
