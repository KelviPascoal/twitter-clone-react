import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.secondary};
    border-radius: 1.4rem;
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    padding: 1rem 1.6rem;

    & + div {
      border-top: 0.1rem solid ${theme.colors.outline};
    }

    &:first-child {
      padding-top: 1.3rem;
    }

    &:last-child {
      padding-bottom: 1.7rem;
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`;
