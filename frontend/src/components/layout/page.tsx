import { FC } from 'react'
import styled from 'styled-components'

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Page: FC = ({ children }) => <StyledPage>{children}</StyledPage>
