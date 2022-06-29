import styled, {createGlobalStyle} from "styled-components";
import normalize from "polished/lib/mixins/normalize";

export const Layout = styled.div`
`

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
`
