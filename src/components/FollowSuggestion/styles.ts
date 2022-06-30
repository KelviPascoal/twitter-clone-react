import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Button } from "../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings[12]};
    height: ${theme.spacings[12]};
    background: ${theme.colors.gray};
    border-radius: 50%;
    margin-right: ${theme.spacings[2.5]};
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > strong {
      font-size: ${theme.font.sizes.medium};
    }
    > span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};
    }
  `}
`;

export const FollowButton = styled(Button)`
  ${({ theme }) => css`
    padding: ${theme.spacings[1.5]} ${theme.spacings[4]};
  `}
`;
