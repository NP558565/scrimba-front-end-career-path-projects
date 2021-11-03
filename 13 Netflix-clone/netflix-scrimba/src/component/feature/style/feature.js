import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  align-items: center;
  padding: 75px 0;
  text-align: center;
  color: white;
  padding: 165px 45px;

  @media (max-width: 600px) {
    padding: 70px 20px;
  }
`

export const Title = styled.h1`
  max-width: 700px;
  font-size: 64px;
  margin-bottom: 0;
  line-height: 1.1;

  @media (max-width: 1300px) {
    max-width: 600px;
    font-size: 50px;
  }

  @media (max-width: 600px) {
    font-size: 26px;
  }
`

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`
