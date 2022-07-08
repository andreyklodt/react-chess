import styled from "styled-components";

type PropsT = {
   isYellow: boolean
}

export const Wrapper = styled.td<PropsT>`
  background: ${({theme, isYellow}) => isYellow ? theme.colors.yellow.c200 : theme.colors.green.c500};
  width: 65px;
  height: 65px;
`
