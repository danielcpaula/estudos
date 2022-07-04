import styled from 'styled-components'

export const Container = styled.header `
  grid-area: header;

  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #3E3B47;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  padding: 0 123px;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > .search {
    width: 630px;
  }
`

export const Profile = styled.div `
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;

    span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: end ;
  }

  strong {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  }
`