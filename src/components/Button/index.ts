import styled, { css } from "styled-components";

type ButtonProps = {
  outlined?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${({ outlined, theme }) => css`
    background: ${outlined ? "transparent" : theme.colors.twitter};
    color: ${outlined ? theme.colors.twitter : theme.colors.white};
    border: ${outlined ? `0.1rem solid ${theme.colors.twitter}` : "none"};

    padding: 1.6rem;
    border-radius: 2.5rem;

    font-weight: bold;
    font-size: ${theme.font.sizes.medium};

    cursor: pointer;
    outline: 0;

    &:hover {
      background: ${outlined
        ? theme.colors.twitterDarkHover
        : theme.colors.twitterLightHover};
    }
  `}
`;
