import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100vh;
`

export const Content = styled.div `
  padding: 0 123px;
  margin-top: 47px;
`

export const Section = styled.section `
  > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    > h2 {
      font-size: 32px;
      line-height: 42px;
      font-weight: 400;
    }

    > .btn-header {
      width: 207px;
    }
  }
`