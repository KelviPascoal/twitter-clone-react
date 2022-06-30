import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: max(4.5rem, min(13.5rem, 22vw));
    height: max(4.5rem, min(13.5rem, 22vw));

    border: 0.4rem solid ${theme.colors.primary};
    background: ${theme.colors.gray};
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  `}
`;
