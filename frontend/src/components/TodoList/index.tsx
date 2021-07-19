import { FC } from 'react'
import { StyledTodoList } from './styles'

export const TodoList: FC = ({ children }) => (
  <StyledTodoList>{children}</StyledTodoList>
)
