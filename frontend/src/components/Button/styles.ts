import styled, { css } from 'styled-components'

export interface StyledButtonProps {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  block?: boolean
  loading?: boolean
  disabled?: boolean
}

export const IconWrapper = styled.div`
  margin: 0 5px;
  display: flex;
`

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  position: relative;
  text-align: center;
  vertical-align: middle;
  padding: var(--spacing-s);
  border-radius: var(--spacing-s);
  border: 1px solid var(--primary);

  ${(props) =>
    props.block &&
    css`
      display: flex;
      justify-content: center;
      width: 100%;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: var(--white);
      border: 1px solid var(--primary);
      color: var(--dark);
      font-size: var(--font-size-default);

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background-color: var(--gray);
        border-color: var(--gray);
        color: var(--white);
      }

      &:not(:disabled):active {
        background-color: var(--white);
        border-color: var(--primary);
        color: var(--gray);
      }
    `}


    ${(props) =>
    props.primary &&
    css`
      background-color: var(--primary);
      border-color: var(--primary);
      color: var(--white);
      font-size: var(--font-size-default);

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background-color: var(--blue-hover);
        border: 1px solid var(--blue-hover);
        color: var(--white);
      }

      &:not(:disabled):active {
        background-color: var(--blue-light);
        border-color: var(--blue-light);
        color: var(--white);
      }
    `}

    ${(props) =>
    props.tertiary &&
    css`
      background-color: transparent;
      border-color: transparent;
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;

      &:not(:disabled):hover,
      &:not(:disabled):focus {
        background-color: transparent;
        border-color: transparent;
        text-decoration: underline;
      }

      &:not(.js-button--loading):disabled {
        border-color: transparent;
        color: var(--gray);
      }
    `}
`
