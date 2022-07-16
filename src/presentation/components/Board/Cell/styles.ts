import styled from "styled-components";
import BaseIcon from '../../../components/common/block/Icon'

type WrapperPropsT = {
   isYellow: boolean
}

export const Wrapper = styled.td<WrapperPropsT>`
  background: ${({theme, isYellow}) => isYellow ? theme.colors.yellow.c200 : theme.colors.green.c500};
  width: 65px;
  height: 65px;
`

type IconPropsT = {
   isWhite: boolean
}

export const Icon = styled(BaseIcon)<IconPropsT>`
  width: 100%;
  fill: ${({theme, isWhite}) => theme.colors.white.c900}
`
