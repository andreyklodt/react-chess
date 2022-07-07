type ColorT = {
   c50: string,
   c100: string,
   c200: string,
   c300: string,
   c400: string,
   c500: string,
   c600: string,
   c700: string,
   c800: string,
   c900: string,
   A100: string,
   A200: string,
   A400: string,
   A700: string,
}

type ColorsT = {
   text: ColorT
   background: {
      c500: string,
      c700: string,
      c800: string,
      c900: string,
   }
   green: {
      c500: string
   }
  yellow: {
      c200: string
  }
}
