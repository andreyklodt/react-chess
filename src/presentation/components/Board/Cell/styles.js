import styled from "styled-components";
import BaseIcon from '../../../components/common/block/Icon';
export const Wrapper = styled.td `
  background: ${({ theme, isYellow }) => isYellow ? theme.colors.yellow.c200 : theme.colors.green.c500};
  width: 65px;
  height: 65px;
`;
export const Icon = styled(BaseIcon) `
   width: 100%;
`;
