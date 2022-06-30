import { ElementType } from "react";
import styled from "@emotion/styled";

import { Chat, Rocketseat, Favorite } from "../../styles/Icons";
import { css } from "@emotion/react";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding: 1.4rem 1.6rem;

    border-bottom: 0.1rem solid ${theme.colors.outline};

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
export const RocketseatIcon: ElementType = styled(Rocketseat)`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;

    margin-left: 3.5rem;
    margin-right: 0.9rem;

    > path {
      fill: ${theme.colors.gray};
    }
  `}
`;

export const Body = styled.div`
  display: flex;
  margin-top: 0.3rem;

  position: relative;
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 4.9rem;
    height: 4.9rem;
    border-radius: 50%;
    flex-shrink: 0;
    background: ${theme.colors.gray};

    position: absolute;
    top: 0;
    left: 0;
  `}
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 0.2rem;
  padding-left: 5.9rem;
`;
export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    font-size: ${theme.font.sizes.medium};
    white-space: nowrap;

    > strong {
      margin-right: 0.5rem;
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
    width: 0.2rem;
    height: 0.2rem;
    margin: 0 1rem;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    // 14px
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin-top: 0.4rem;
  `}
`;

export const ImageContent = styled.div`
  ${({ theme }) => css`
    margin-top: 1.2rem;
    width: 100%;
    height: min(28.5rem, max(17.5rem, 41vw));

    background: ${theme.colors.outline};
    border-radius: 1.4rem;

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
    margin: 1.1rem auto 0;
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
      margin-right: 0.5rem;
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

const iconCSS = css`
  width: 1.9rem;
  height: 1.9rem;
`;

export const CommentIcon: ElementType = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon: ElementType = styled(Rocketseat)`
  ${iconCSS}
`;

export const LikeIcon: ElementType = styled(Favorite)`
  ${iconCSS}
`;
