import { ElementType } from "react";
import styled from "@emotion/styled";

import { Chat, TwitterLogo, Favorite } from "../../styles/Icons";
import { css } from "@emotion/react";
import { ThemeDefault } from "../../styles/emotion";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: ${theme.spacings[3.5]} ${theme.spacings[4]};

    border-bottom: ${theme.spacings.px} solid ${theme.colors.outline};

    max-width: 100%;
  `}
`;

export const Retweeted = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `}
`;
export const RocketseatIcon: ElementType = styled(TwitterLogo)`
  ${({ theme }) => css`
    width: ${theme.spacings[4]};
    height: ${theme.spacings[4]};
    margin-left: ${theme.spacings[9]};
    margin-right: ${theme.spacings[2.5]};

    > path {
      fill: ${theme.colors.gray};
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings[1]};
    position: relative;
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings[12]};
    height: ${theme.spacings[12]};
    border-radius: 50%;
    flex-shrink: 0;
    background: ${theme.colors.gray};

    position: absolute;
    top: 0;
    left: 0;
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: ${theme.spacings[0.5]};
    padding-left: ${theme.spacings[14]};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    font-size: ${theme.font.sizes.medium};
    white-space: nowrap;

    > strong {
      margin-right: ${theme.spacings[1]};
      color: ${theme.colors.white};
    }

    > span,
    time {
      color: ${theme.colors.gray};
    }

    > strong,
    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `}
`;

export const Dot = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    width: ${theme.spacings[0.5]};
    height: ${theme.spacings[0.5]};
    margin: 0 ${theme.spacings[2.5]};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin-top: 0.4 ${theme.spacings[1]};
  `}
`;

export const ImageContent = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings[3]};
    width: 100%;
    height: min(${theme.spacings[72]}, max(${theme.spacings[44]}, 41vw));

    background: ${theme.colors.outline};
    border-radius: ${theme.spacings[3.5]};

    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  `}
`;

export const Icons: ElementType = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: ${theme.spacings[2.5]} auto 0;
    width: 100%; /** Mobile */

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 63%;
    }

    > div {
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  `}
`;

export const Status = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    //14px
    font-size: ${theme.font.sizes.medium};

    > svg {
      margin-right: ${theme.spacings[1]};
    }

    &:nth-child(1) {
      &,
      > svg path {
        color: ${theme.colors.gray};
      }
    }
    &:nth-child(2) {
      color: ${theme.colors.retweet};

      > svg path {
        fill: ${theme.colors.retweet};
      }
    }
    &:nth-child(3) {
      color: ${theme.colors.like};

      > svg {
        fill: ${theme.colors.like};
      }
    }
  `}
`;

const iconCSS = (theme: ThemeDefault) => css`
  width: ${theme.spacings[5]};
  height: ${theme.spacings[5]};
`;

export const CommentIcon: ElementType = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon: ElementType = styled(TwitterLogo)`
  ${iconCSS}
`;

export const LikeIcon: ElementType = styled(Favorite)`
  ${iconCSS}
`;
