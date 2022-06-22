import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundSign.png'

export const Container = styled.div `
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form `
  padding: 0 163px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    display: flex;
    align-items: center;
    
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ROSE};

    svg {
      font-size: 20px;
      margin-right: 8px;
    }
  }
`

export const Background = styled.div `
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`