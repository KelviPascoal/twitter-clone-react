import { ElementType } from "react";
import styled from "@emotion/styled";
import { ArrowLeft } from "../../styles/Icons";
import { css } from "@emotion/react";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: min(60.1rem, 100%);

    @media (min-width: ${theme.breakpoints.sm}) {
      border-left: ${theme.spacings.px} solid ${theme.colors.outline};
      border-right: ${theme.spacings.px} solid ${theme.colors.outline};
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    position: sticky;
    top: 0;
    background: ${theme.colors.primary};

    display: flex;
    align-items: center;

    text-align: left;

    padding: ${theme.spacings[2]} 0 ${theme.spacings[2]} ${theme.spacings[3]};
    border-bottom: ${theme.spacings.px} solid ${theme.colors.outline};

    > button {
      padding: ${theme.spacings[2]};
      border-radius: 50%;

      outline: 0;
      cursor: pointer;

      &:hover {
        background: ${theme.colors.twitterDarkHover};
      }
    }
  `}
`;

export const BackIcon: ElementType = styled(ArrowLeft)`
  ${({ theme }) => css`
    width: ${theme.spacings[6]};
    height: ${theme.spacings[6]};

    fill: ${theme.colors.twitter};
  `}
`;

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings[4]};

    display: flex;
    flex-direction: column;

    > strong {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xlarge};
    }
    > span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};
    }
  `}
`;
