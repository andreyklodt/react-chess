import styled, {css} from "styled-components";
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
   isInverted: boolean
}

const invertedIconCss = css`
  filter: invert(1);   
`

export const Icon = styled(BaseIcon)<IconPropsT>`
  width: 100%;
  
  ${({isInverted})=> isInverted && invertedIconCss}
`
