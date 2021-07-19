import { InputHTMLAttributes, FC } from 'react'
import { StyledCheckbox, StyledCheckboxProps, CheckIcon } from './styles'

interface Props
  extends StyledCheckboxProps,
    InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: FC<Props> = ({ checked, onChange, ...rest }) => (
  <StyledCheckbox checked={checked} onChange={onChange} {...rest}>
    <CheckIcon viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </CheckIcon>
  </StyledCheckbox>
)
