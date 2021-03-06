import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    strong {
      font-size: ${theme.font.sizes.small};
    }

    > p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
      margin-bottom: ${theme.spacings[1]};
    }
  `}
`;
