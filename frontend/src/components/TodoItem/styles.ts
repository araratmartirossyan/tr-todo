import styled, { css } from 'styled-components'

interface StyledTodoItemProps {
  done?: boolean
}

export const StyledTodoItem = styled.li<StyledTodoItemProps>`
  display: flex;
  color: var(--white);
  padding: var(--spacing-s);
  border: 1px solid var(--white);
  margin-bottom: var(--spacing-s);
  align-items: center;
  width: 100%;
  border-radius: var(--spacing-s);
  cursor: pointer;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}

  .todo {
    &-checkbox {
      margin-right: var(--spacing-s);
    }

    &-edit-input {
      width: 80%;
      border: none;
    }

    &-icon-button {
      color: white;
      &:hover {
        color: var(--red);
      }
      &:active {
        color: var(--white);
      }
    }
  }
`

export const ActionsBlock = styled.div`
  align-self: flex-end;
  color: white;
  margin-left: auto;
`
