import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 48px;
  font-weight: normal;
  margin-bottom: 40px;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  max-width: 140px;
  margin: auto;
  width: 100%;
  justify-content: space-evenly;
`

export const Name = styled.p`
  text-align: center;
  color: #808080;
`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
`

export const Item = styled.li`
  cursor: pointer;
  max-height: 200px;
  list-style-type: none;
  max-width: 200px;

  &:hover {
    ${Picture} {
      border: 2px solid white;
    }
    ${Name} {
      color: white;
      font-weight: bold;
    }
  }
`
