import styled, {css} from "styled-components";
import BaseIcon from '../../../components/common/block/Icon'
import {ITheme} from "../../../context/Theme/themes";

type WrapperPropsT = {
   isYellow: boolean
   isActive: boolean
}

const activeWrapperCss = (theme: ITheme) =>css `
  background: ${theme.colors.blue.c500};
`

const defaultWrapperCss = (theme:ITheme, isYellow:boolean)=>css`
  background: ${isYellow ? theme.colors.yellow.c200 : theme.colors.green.c500};
`

export const Wrapper = styled.td<WrapperPropsT>`
  width: 65px;
  height: 65px;
  
  ${({isYellow, isActive, theme})=> isActive ? activeWrapperCss(theme) : defaultWrapperCss(theme, isYellow) }
  
`

export const Icon = styled(BaseIcon)`
  width: 100%;
`
