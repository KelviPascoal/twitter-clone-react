import styled, { css } from "styled-components";

import { LocationOn, Cake } from "../../styles/Icons";
import { Button } from "../../components/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 20rem);

    background: ${theme.colors.twitter};

    position: relative;
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: max(4.5rem, min(13.5rem, 22vw));
    height: max(4.5rem, min(13.5rem, 22vw));

    border: 0.4rem solid ${theme.colors.primary};
    background: ${theme.colors.gray};
    border-radius: 50%;

    position: absolute;
    bottom: max(-6rem, -10vw);
    left: ${theme.font.sizes.medium};
  `}
`;

export const ProfileData = styled.div`
  ${({ theme }) => css`
    padding: min(calc(10vw + 0.7rem), 6.7rem) 1.6rem 0;

    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
      font-weight: bold;
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.white};
    }
    > h2 {
      font-weight: normal;
      font-size: ${theme.font.sizes.medium};

      color: ${theme.colors.gray};
    }
    > p {
      font-size: ${theme.font.sizes.medium};
      margin-top: 1.1rem;

      > a {
        text-decoration: none;
        color: ${theme.colors.twitter};
      }
    }
    > ul {
      list-style: none;
      margin-top: 1rem;
      margin-bottom: 1rem;

      > li {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.gray};

        > svg {
          fill: ${theme.colors.gray};
          margin-right: 0.5rem;
        }
      }
    }
  `}
`;

const iconCSS = css`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;

    color: ${theme.colors.gray};
  `}
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  ${({ theme }) => css`
    display: flex;

    strong {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
    }

    > span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};

      & + span {
        margin-left: 2rem;
      }
    }
  `}
`;

export const EditButton = styled(Button)`
  ${({ theme }) => css`
    position: absolute;
    top: 2vw;
    right: 0.7rem;

    padding: 0.4rem 1.6rem;
    font-size: ${theme.font.sizes.small};

    @media (min-width: ${theme.breakpoints.xs}) {
      top: 1rem;
      padding: 1rem 1.9rem;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
