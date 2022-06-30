import styled, { css } from "styled-components";

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
      margin-bottom: 0.3rem;
    }
  `}
`;
