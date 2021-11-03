import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  color: #757575;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  padding: 20px 65px;
  @media (max-width: 450px) {
    padding: 50px 35px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 15px;

  @media (max-width: 750px) {
    grid-gap: 15px 50px;
    grid-template-columns: repeat(2, minmax(130px, 1fr));
  }
`

export const Link = styled.a`
  color: #757575;

  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Title = styled.p`
  color: #757575;
  margin-bottom: 30px;
  font-size: 16px;
`

export const Text = styled.p``

export const Break = styled.div``
