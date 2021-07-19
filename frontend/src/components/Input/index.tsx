import styled from 'styled-components'

export const StyledInput = styled.input`
  font-size: var(--font-size-default);
  padding: var(--spacing-s);
  background: none;
  color: var(--white);
  width: 100%;
  border: 1px solid var(--white);
  border-radius: var(--spacing-s);
  ::placeholder {
    color: var(--gray);
  }
`
