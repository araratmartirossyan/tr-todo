import styled from 'styled-components'

export interface StyledCheckboxProps {
  checked?: boolean
}

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? 'var(--green)' : 'var(--white)')};
  border-radius: 3px;
  transition: all 150ms;

  ${CheckIcon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
