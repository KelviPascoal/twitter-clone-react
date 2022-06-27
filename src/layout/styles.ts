import styled, { css } from "styled-components";

export const Container = styled.div`
${({ theme }) => css`
    background-color: ${theme.colors.primary};
`}
`

export const Wrapper = styled.div`
${({ theme }) => css`
    background-color: ${theme.colors.primary};
`}
`
