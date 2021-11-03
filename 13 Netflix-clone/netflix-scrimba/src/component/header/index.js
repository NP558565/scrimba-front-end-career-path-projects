import React, { useState } from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import {
  Background,
  Container,
  ButtonLink,
  Logo,
  Link,
  Group,
  Text,
  Feature,
  FeatureCallOut,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  DropDown,
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFramer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, src, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo src={src} {...restProps} />
    </ReachRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <img src="./images/icons/search.png" alt="Search Icon" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        placeholder="Search films and series"
        active={searchActive}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </Search>
  )
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={`./images/users/${src}.png`} {...restProps} />
}

Header.DropDown = function HeaderDropDown({ children, ...restProps }) {
  return <DropDown {...restProps}>{children}</DropDown>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}
