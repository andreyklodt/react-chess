import styled from "styled-components";

export const Wrapper = styled.table`
    border-collapse: collapse;
`

export const TCell = styled.td`
  height: 90px;
  width: 90px;
`

export const TRow = styled.tr`
  &:nth-child(odd) {
    ${TCell}:nth-child(odd) {
      background: ${({theme}) => theme.colors.green.c500}
    }

    ${TCell}:nth-child(even) {
      background: ${({theme}) => theme.colors.yellow.c200}
    }
  }

  &:nth-child(even) {
    ${TCell}:nth-child(even) {
      background: ${({theme}) => theme.colors.green.c500}
    }
      
    ${TCell}:nth-child(odd) {
      background: ${({theme}) => theme.colors.yellow.c200}
    }
  }
`

