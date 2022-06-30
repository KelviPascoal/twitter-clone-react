import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
`;
