type ColorsT = {

}

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

export default ThemeT
