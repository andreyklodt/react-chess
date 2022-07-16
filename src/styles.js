import styled, { createGlobalStyle } from "styled-components";
import normalize from "polished/lib/mixins/normalize";
export const Layout = styled.div `
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.c700}
`;
export const GlobalStyle = createGlobalStyle `
  ${normalize()}
`;
