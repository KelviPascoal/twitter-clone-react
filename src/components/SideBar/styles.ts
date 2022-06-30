import { ElementType } from "react";
import styled from "@emotion/styled";

import { Search } from "../../styles/Icons";
import { css } from "@emotion/react";

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.lg}) {
      display: flex;
      flex-direction: column;

      width: min(${theme.spacings[96]}, 100%);
    }
  `}
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings[2.5]} ${theme.spacings[6]};
    width: min(39.9 ${theme.spacings[96]}, 100%);

    position: fixed;
    top: 0;
    z-index: ${theme.layers.base};
    background: ${theme.colors.primary};

    max-height: ${theme.spacings[14]};
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.spacings[10]};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings[2.5]} 0 ${theme.spacings[13]};
    border-radius: ${theme.spacings[48]};
    background: ${theme.colors.search};

    &::placeholder {
      color: ${theme.colors.gray};
    }

    ~ svg {
      position: relative;
      top: -${theme.spacings[8]};
      left: ${theme.spacings[4]};
      z-index: ${theme.layers.base};

      transition: 180ms ease-in-out;
    }

    outline: 0;

    &:focus {
      border: ${theme.spacings.px} solid ${theme.colors.twitter};

      ~ svg {
        fill: ${theme.colors.twitter};
      }
    }
  `}
`;

export const SearchIcon: ElementType = styled(Search)`
  ${({ theme }) => css`
    width: ${theme.spacings[7]};
    height: ${theme.spacings[7]};

    fill: ${theme.colors.gray};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings[14]} ${theme.spacings[6]} ${theme.spacings[52]};
    margin-top: ${theme.spacings[1]};

    > div + div {
      margin-top: ${theme.spacings[4]};
    }
  `}
`;
