import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.secondary};
    border-radius: ${theme.spacings[3.5]};
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings[2.5]} ${theme.spacings[4]};

    & + div {
      border-top: ${theme.spacings.px} solid ${theme.colors.outline};
    }

    &:first-child {
      padding-top: ${theme.spacings[3]};
    }

    &:last-child {
      padding-bottom: ${theme.spacings[4]};
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`;
