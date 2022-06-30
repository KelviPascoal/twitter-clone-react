import styled from "@emotion/styled";
import { LocationOn, Cake } from "../../styles/Icons";
import { Button } from "../../components/Button";
import { css } from "@emotion/react";
import { ThemeDefault } from "../../styles/emotion";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, ${theme.spacings[52]});

    background: ${theme.colors.twitter};

    position: relative;
  `}
`;

export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: max(-${theme.spacings[15]}, -10vw);
    left: ${theme.font.sizes.medium};
  `}
`;

export const ProfileData = styled.div`
  ${({ theme }) => css`
    padding: min(calc(10vw + ${theme.spacings[1.5]}), ${theme.spacings[16]})
      ${theme.spacings[4]} 0;

    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
      font-weight: bold;
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.white};
    }
    > h2 {
      font-weight: normal;
      font-size: ${theme.font.sizes.medium};

      color: ${theme.colors.gray};
    }
    > p {
      font-size: ${theme.font.sizes.medium};
      margin-top: ${theme.spacings[3]};

      > a {
        text-decoration: none;
        color: ${theme.colors.twitter};
      }
    }
    > ul {
      list-style: none;
      margin-top: ${theme.spacings[2.5]};
      margin-bottom: ${theme.spacings[2.5]};

      > li {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.gray};

        > svg {
          fill: ${theme.colors.gray};
          margin-right: ${theme.spacings[1.5]};
        }
      }
    }
  `}
`;

const iconCSS = (theme: ThemeDefault) => css`
  width: ${theme.spacings[5]};
  height: ${theme.spacings[5]};

  color: ${theme.colors.gray};
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS(theme)}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS(theme)}
`;

export const Followage = styled.div`
  ${({ theme }) => css`
    display: flex;

    strong {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
    }

    > span {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};

      & + span {
        margin-left: ${theme.spacings[5]};
      }
    }
  `}
`;

export const EditButton = styled(Button)`
  ${({ theme }) => css`
    position: absolute;
    top: 2vw;
    right: ${theme.spacings[2]};

    padding: ${theme.spacings[1]} ${theme.spacings[4]};
    font-size: ${theme.font.sizes.small};

    @media (min-width: ${theme.breakpoints.xs}) {
      top: ${theme.spacings[2.5]};
      padding: ${theme.spacings[2.5]} ${theme.spacings[5]};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
