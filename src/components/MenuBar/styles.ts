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

      padding: ${theme.spacings[2.5]} ${theme.spacings[5]} ${theme.spacings[5]};

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

    @media (min-width: ${theme.breakpoints.xl}) {
      align-items: flex-start;
    }
  `}
`;

export const Logo = styled(TwitterLogo)`
  ${({ theme }) => css`
    width: ${theme.spacings[10]};
    height: ${theme.spacings[10]};

    > path {
      fill: ${theme.colors.twitter};
    }

    margin-bottom: ${theme.spacings[5]};
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

    @media (min-width: ${theme.breakpoints.xl}) {
      > span {
        display: inline;
        margin-left: ${theme.spacings[5]};

        font-weight: bold;
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.white};
      }

      padding-right: ${theme.spacings[4]};
    }

    padding: ${theme.spacings[2]} 0;
    outline: 0;

    & + button {
      margin-top: ${theme.spacings[3.5]};
    }

    & + button:last-child {
      margin-top: ${theme.spacings[8]};

      width: ${theme.spacings[10]};
      height: ${theme.spacings[10]};

      > span {
        display: none;
      }

      @media (min-width: ${theme.breakpoints.xl}) {
        width: 100%;
        height: unset;

        > span {
          display: inline;
        }
      }
    }

    cursor: pointer;
    border-radius: ${theme.spacings[6]};

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

  width: ${theme.spacings[8]};
  height: ${theme.spacings[8]};
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
  ${({ theme }) => css`
    margin-top: ${theme.spacings[8]};

    display: flex;
    align-items: center;
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings[10]};
    height: ${theme.spacings[10]};

    flex-shrink: 0;

    border-radius: 50%;
    background-color: ${theme.colors.gray};
  `}
`;

export const ProfileData = styled.div`
  ${({ theme }) => css`
    display: none;
    @media (min-width: ${theme.breakpoints.xl}) {
      display: flex;
      flex-direction: column;

      margin-left: ${theme.spacings[2.5]};
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

    @media (min-width: ${theme.breakpoints.xl}) {
      display: inline-block;
      width: ${theme.spacings[6]};
      height: ${theme.spacings[6]};
      color: ${theme.colors.white};
      margin-left: ${theme.spacings[8]};
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
    border-top: ${theme.spacings.px} solid ${theme.colors.outline};

    display: flex;
    justify-content: space-between;

    padding: ${theme.spacings[2]}
      min(${theme.spacings[12]}, max(10vw, ${theme.spacings[2.5]}));

    @media (min-width: ${theme.breakpoints.sm}) {
      display: none;
    }
  `}
`;
