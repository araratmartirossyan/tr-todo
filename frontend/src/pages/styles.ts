import styled from 'styled-components'

export const Section = styled.section`
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: var(--spacing-m);
  margin-top: var(--spacing-m);

  .task-input {
    margin-right: var(--spacing-s);
  }

  .home-page-empty {
    color: var(--white);
  }
`
