import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings[2.5]};
    padding: ${theme.spacings[2.5]} 0 ${theme.spacings[4]};
    text-align: center;

    font-weight: bold;
    font-size: ${theme.font.sizes.medium};

    outline: 0;
    cursor: pointer;

    color: ${theme.colors.twitter};
    border-bottom: ${theme.spacings[0.5]} solid ${theme.colors.twitter};

    &:hover {
      background: ${theme.colors.twitterDarkHover};
    }
  `}
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
