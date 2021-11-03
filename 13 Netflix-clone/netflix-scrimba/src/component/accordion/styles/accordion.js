import styled from 'styled-components'

export const Container = styled.div`
  border-bottom: 8px solid #222;
  padding: 70px 45px;

  @media (max-width: 500px) {
    padding: 50px 0;
  }
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
  @media (max-width: 1000px) {
    max-width: 715px;
  }
`
export const Title = styled.p`
  font-size: 50px;
  margin-top: 0;
  color: white;
  font-weight: bold;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`
export const Item = styled.div`
  color: white;
  font-size: 26px;
  transition: max-height 0.5s cubic-bezier(0.5, 0, 0.1, 1);

  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 40px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #303030;
  user-select: none;
  img {
    width: 23px;
    filter: brightness(0) invert(1);
  }
  @media (max-width: 600px) {
    img {
      width: 20px;
    }
  }

  padding: 0.9em 1.3em 0.9em 1.3em;
  margin-bottom: 1px;
  cursor: pointer;
`

export const Body = styled.div`
    background: #303030;
    padding: .9em 1.3em .9em 1.3em;
    line-height: 1.3;
    transition: max-height .5s cubic-bezier(0.5, 0, 0.1, 1);
    user-select: none;
}

`
