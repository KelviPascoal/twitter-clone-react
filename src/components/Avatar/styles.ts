import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: max(${theme.spacings[10]}, min(${theme.spacings[34]}, 22vw));
    height: max(${theme.spacings[10]}, min(${theme.spacings[34]}, 22vw));

    border: ${theme.spacings[1]} solid ${theme.colors.primary};
    background: ${theme.colors.gray};
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  `}
`;
