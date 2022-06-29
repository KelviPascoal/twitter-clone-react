import { ElementType } from "react";
import styled, { css } from "styled-components";
import { ArrowLeft } from "../../styles/Icons";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: min(60.1rem, 100%);

    @media (min-width: ${theme.breakpoints.sm}) {
      border-left: 0.1rem solid ${theme.colors.outline};
      border-right: 0.1rem solid ${theme.colors.outline};
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    position: sticky;
    top: 0;
    background: ${theme.colors.primary};

    display: flex;
    align-items: center;

    text-align: left;

    padding: 0.8rem 0 0.9rem 1.3rem;
    border-bottom: 0.1rem solid ${theme.colors.outline};

    > button {
      padding: 0.8rem;
      border-radius: 50%;

      outline: 0;
      cursor: pointer;

      &:hover {
        background: ${theme.colors.twitterDarkHover};
      }
    }
  `}
`;

export const BackIcon: ElementType = styled(ArrowLeft)`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    fill: ${theme.colors.twitter};
  `}
`;

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    margin-left: 1.7rem;

    display: flex;
    flex-direction: column;

    > strong {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
    }
    > span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};
    }
  `}
`;
