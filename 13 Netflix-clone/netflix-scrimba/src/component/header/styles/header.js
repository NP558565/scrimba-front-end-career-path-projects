import styled from 'styled-components'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
    url(${({ src }) =>
        src ? `./images/misc/${src}.jpg` : `./images/misc/home-bg.jpg`})
      top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`
export const Container = styled.div`
  display: flex;
  aling-items: center;
  padding: 30px 0 7px;
  margin: 0 56px;
  height: 70px;
  justify-content: space-between;

  @media (max-width: 1000px) {
    margin: 0 5%;
  }
`

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    ${({ margin }) => !margin && 'margin-left: 40px;'}

    font-size: 15px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;
    user-select: none;
    text-shadow 2px 2px 4px rgba(0, 0, 0, 1);
    &:last-of-type {
        ${({ margin }) => !margin && 'margin-left: 20px;'}
    }
`
export const ButtonLink = styled(ReachRouterLink)`
  display: ${({ displaybutton }) => (displaybutton ? displaybutton : 'none')};
  color: white;
  text-decoration: none;
  background: #e50914;
  padding: 6px 18px;
  font-size: 16px;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
`
export const Logo = styled.img`
  height: 40px;
  width: 140px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`

export const Group = styled.div`
  display: flex;
  align-items: center;
`
export const Text = styled.p`
    color: white;
    font-size: 22px;
    max-width: 700px;
    width: 100%;
    line-height: normal;
    text-shadow 2px 2px 4px rgba(0, 0, 0, .45)
`

export const Feature = styled(Container)`
  flex-direction: column;
  padding: 150px 0 550px;
  color: white;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;

  @media (max-width: 700px) {
    display: none;
  }
`

export const SearchIcon = styled.div`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`
export const SearchInput = styled.input`
  border: 1px solid #fff;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  transition: width 0.5s;
  background-color: #44444459;
  height: 30px;
  margin-left: ${({ active }) => (active ? '10px' : '0')};
  padding: ${({ active }) => (active ? '10px' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  width: ${({ active }) => (active ? '200px' : '0')};
`
export const Picture = styled.button`
  background: url(${({ src }) => src});
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 0;
  cursor: pointer;
`

export const DropDown = styled.div`
  position: absolute;
  display: none;
  background: black;
  top: 32px;
  right: 10px;
  padding: 10px;
  width: 105px;

  ${Group} {
    &:first-of-type {
      margin-bottom: 10px;
    }
    &:first-of-type ${Link} {
      margin-left: 10px;
    }
    &:first-of-type ${Link}, ${Picture} {
      cursor: default;
    }
    &:last-of-type ${Link} {
      cursor: pointer;
    }
  }
  p {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const Profile = styled.div`
  margin-top: -20px;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 20px;

  &:hover > ${DropDown} {
    display: flex;
    flex-direction: column;
  }
`
