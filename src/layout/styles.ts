import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    max-width: ${theme.breakpoints.xl};
    margin: 0 auto;

    display: flex;
    justify-content: center;
  `}
`;
