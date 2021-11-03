import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 500px) {
    padding: 0 20px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  min-width: 100px;
  height: 60px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    height: 50px;
    font-size: 18px;
  }
`
export const Text = styled.p`
  font-size: 19px;

  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  background: #e50914;
  color: white;
  font-size: 26px;
  font-family: inherit;
  border: 0;
  height: 60px;
  padding: 0 30px;
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 16px;
    height: 40px;
    padding: 0 20px;
  }
  &:hover {
    background: #f40612;
  }

  img {
    filter: brightness(0) invert(1);
    width: 20px;
    margin-left: 3px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
