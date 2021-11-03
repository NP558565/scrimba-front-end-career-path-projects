import styled from 'styled-components'

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  margin: 0 20px;
`

export const Container = styled.div``

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`

export const Button = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  background-color: #e6e6e6;
  max-width: 130px;
  width: 100%;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 1;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(140deg);
  }
  &:after {
    transform: rotate(40deg);
  }
`
