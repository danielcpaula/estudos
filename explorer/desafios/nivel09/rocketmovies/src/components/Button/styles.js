import styled from 'styled-components'

export const Container = styled.button `
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  height: 56px;
  padding: 0 16px;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: 500px;

  &:disabled {
    opacity: 0.5;
  }
`