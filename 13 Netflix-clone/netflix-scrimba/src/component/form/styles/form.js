import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  min-height: 660px;
  padding: 40px 68px 60px;
  border-radius: 3px;
  width: 100%;
  margin: 30px auto 90px;
  background: rgba(0, 0, 0, 0.75);
  @media (max-width: 600px) {
    padding: 30px 38px;
  }
  animation: fade 0.2s forwards ease-out;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`
export const SeenText = styled.p`
  position: absolute;
  color: #737373;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 40px;
  width: 20px;
  user-select: none;
  transition: all 0.2s ease-out;
  cursor: pointer;
`

export const InputControl = styled.div`
  position: relative;
`

export const TextSmall = styled.h2`
  font-size: 13px;
  color: #8c8c8c;
`

export const Link = styled(ReachRouterLink)`
  color: white;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Input = styled.input`
  padding: 15px 20px;
  width: 100%;
  font-size: 16px;
  color: white;
  border: 0;
  background: #333333;
  border-radius: 3px;
  margin-bottom: 20px;
`

export const Submit = styled.button`
  font-size: 16px;
  padding: 15px 0;
  background: #e50914;
  color: white;

  margin: 20px 0 10px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
