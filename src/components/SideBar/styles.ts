import styled, { css } from "styled-components";

import { Search } from "../../styles/Icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(39.9rem, 100%);
  }
`;

export const SearchWrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem 2.4rem;
    width: min(39.9rem, 100%);

    position: fixed;
    top: 0;
    z-index: 2;
    background: ${theme.colors.primary};

    max-height: 5.7rem;
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 3.9rem;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    padding: 0 1rem 0 5.2rem;
    border-radius: 19.5rem;
    background: ${theme.colors.search};

    &::placeholder {
      color: ${theme.colors.gray};
    }

    ~ svg {
      position: relative;
      top: -3.3rem;
      left: 1.5rem;
      z-index: 1;

      transition: 180ms ease-in-out;
    }

    outline: 0;

    &:focus {
      border: 0.1rem solid ${theme.colors.twitter};

      ~ svg {
        fill: ${theme.colors.twitter};
      }
    }
  `}
`;

export const SearchIcon = styled(Search)`
  ${({ theme }) => css`
    width: 2.7rem;
    height: 2.7rem;

    fill: ${theme.colors.gray};
  `}
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.7rem 2.4rem 20rem;
  margin-top: 0.3rem;

  > div + div {
    margin-top: 1.5rem;
  }
`;
