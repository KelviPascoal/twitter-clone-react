import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    padding: 1.1rem 0 1.5rem;
    text-align: center;

    font-weight: bold;
    font-size: 1.5rem;

    outline: 0;
    cursor: pointer;

    color: ${theme.colors.twitter};
    border-bottom: 0.2rem solid ${theme.colors.twitter};

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
