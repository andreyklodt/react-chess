import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 40px);
  grid-template-rows: repeat(8, 40px);
  background: ${({theme}) => theme.colors.background.c700}
`

export const ThemeButton = styled.button`
  color: ${({theme}) => theme.colors.text.c50};
  background: ${({theme}) => theme.colors.background.c900}
`
