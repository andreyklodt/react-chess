interface IDefaultColors {
   black: {
      c900: string
   },
   white: {
      c900: string
   },
   green: {
      c500: string
   }
   yellow: {
      c200: string
   }
}

export interface IColors extends IDefaultColors {
   text: {
      c500: string
   },

   background: {
      c500: string,
      c700: string,
      c800: string,
      c900: string,
   }
}


const defaultColors: IDefaultColors = {
   black: {
      c900: '#000000'
   },
   white: {
      c900: '#fffff'
   },
   green: {
      c500: '#769656'
   },
   yellow: {
      c200: '#eeeed2'
   },
   // action: {
   //    button: {
   //       active: '#f8f8f8',
   //       hover: '#f8f8f8',
   //       disabled: '#f8f8f8',
   //       focus: '#f8f8f8',
   //    },
   //    link: {},
   // }
}

export default defaultColors
