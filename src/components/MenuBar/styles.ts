import { ElementType } from "react";
import styled from "@emotion/styled";

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  TwitterLogo,
  Search,
  Options,
} from "../../styles/Icons";
import { Button } from "../Button";
import { css } from "@emotion/react";
import { ThemeDefault } from "../../styles/emotion";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.sm}) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      position: sticky;
      top: 0;
      left: 0;

      padding: 0.9rem 1.9rem 2rem;

      max-height: 100vh;
      overflow-y: auto;
    }
  `}
`;

export const Topside = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${theme.breakpoints.lg}) {
      align-items: flex-start;
    }
  `}
`;

export const Logo = styled(TwitterLogo)`
  ${({ theme }) => css`
    width: 4.1rem;
    height: 4.1rem;

    > path {
      fill: ${theme.colors.twitter};
    }

    margin-bottom: 2rem;
  `}
`;

export const MenuButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
      display: none;
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      > span {
        display: inline;
        margin-left: 1.9rem;

        font-weight: bold;
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.white};
      }

      padding-right: 1.5rem;
    }

    padding: 0.8rem 0;
    outline: 0;

    & + button {
      margin-top: 1.6rem;
    }

    & + button:last-child {
      margin-top: 3.3rem;

      width: 4rem;
      height: 4rem;

      > span {
        display: none;
      }

      @media (min-width: ${theme.breakpoints.lg}) {
        width: 100%;
        height: unset;

        > span {
          display: inline;
        }
      }
    }

    cursor: pointer;
    border-radius: 2.5rem;

    &:hover {
      background-color: ${theme.colors.twitterDarkHover};
    }

    &:hover,
    &.active {
      span,
      svg {
        color: ${theme.colors.twitter};
        fill: ${theme.colors.twitter};
      }
    }
  `}
`;

const iconCSS = (theme: ThemeDefault) => css`
  flex-shrink: 0;

  width: 3rem;
  height: 3rem;
  color: ${theme.colors.white};
`;

export const HomeIcon: ElementType = styled(Home)`
  ${iconCSS(theme)}
`;
export const BellIcon: ElementType = styled(Notifications)`
  ${iconCSS(theme)}
`;
export const EmailIcon: ElementType = styled(Email)`
  ${iconCSS(theme)}
`;
export const FavoriteIcon: ElementType = styled(FavoriteBorder)`
  ${iconCSS(theme)}
`;
export const ProfileIcon: ElementType = styled(Person)`
  ${iconCSS(theme)}
`;
export const SearchIcon: ElementType = styled(Search)`
  ${iconCSS(theme)}
`;

export const Botside = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 3.9rem;
    height: 3.9rem;

    flex-shrink: 0;

    border-radius: 50%;
    background-color: ${theme.colors.gray};
  `}
`;

export const ProfileData = styled.div`
  ${({ theme }) => css`
    display: none;
    @media (min-width: ${theme.breakpoints.lg}) {
      display: flex;
      flex-direction: column;

      margin-left: 1rem;
      font-size: ${theme.font.sizes.large};

      span {
        color: ${theme.colors.gray};
      }
    }
  `}
`;

export const ExitIcon: ElementType = styled(Options)`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.lg}) {
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors.white};
      margin-left: 3rem;
      cursor: pointer;

      &:hover {
        > path {
          color: ${theme.colors.like};
        }
      }
    }
  `}
`;

export const TweetarButton: ElementType = styled(Button)`
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const BottomMenu = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;

    background: ${theme.colors.primary};
    width: 100%;
    border-top: 0.1rem solid ${theme.colors.outline};

    display: flex;
    justify-content: space-between;

    padding: 0.8rem min(4.6rem, max(10vw, 1rem));

    @media (min-width: ${theme.breakpoints.sm}) {
      display: none;
    }
  `}
`;
