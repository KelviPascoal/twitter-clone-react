import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonProps = {
  outlined?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${({ outlined, theme }) => css`
    background: ${outlined ? "transparent" : theme.colors.twitter};
    color: ${outlined ? theme.colors.twitter : theme.colors.white};
    border: ${outlined
      ? `${theme.spacings.px} solid ${theme.colors.twitter}`
      : "none"};

    padding: ${theme.spacings[4]};
    border-radius: ${theme.spacings[6]};

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
