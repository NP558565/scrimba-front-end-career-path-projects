import styled from 'styled-components'

export const Title = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;

  @media (max-width: 800px) {
    margin-left: 30px;
  }
`

export const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    margin-bottom: 50px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ margin }) => margin && `margin: ${margin};`}

    > ${Container}:first-of-type {
    margin-top: 50px;
  }
`

export const SubTitle = styled.p`
  font-size: 12px;
  color: white;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: white;
  margin-bottom: 0;
  user-select: none;
`

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`

export const Meta = styled.div`
  position: absolute;
  display: none;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`

export const Image = styled.img`
  border: 0;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`

export const Item = styled.div`
  display: flex;
  position: relative;
  margin-right: 5px;
  user-select: none;
  transition: transform 0.5s cubic-bezier(0.5, 0, 0.1, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
    @media (min-width: 1000px) {
      display: block;
      z-index: 100;
    }
  }
  &:first-of-type {
    margin-left: 50px;

    @media (max-width: 800px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 50px;

    @media (max-width: 800px) {
      margin-right: 30px;
    }
  }
`

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) =>
    fontWeight === 'bold' ? 'bold' : 'normal'};
  margin: 0;

  @media (max-width: 800px) {
    line-height: 22px;
  }
`

export const Feature = styled.div`
  display: flex;
  position: relative;
  background: url(${({ src }) => src});
  height: 360px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 50px;
  background-position-x: right;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: cover;
    background-position: center right;
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
  @media (max-width: 800px) {
    margin: 0 30px;
  }
`

export const FeatureTitle = styled(Title)`
  margin-left: 0;
  margin-top: 30px;
`

export const FeatureClose = styled.button`
  position: absolute;
  color: white;
  background: transparent;
  top: 15px;
  right: 15px;
  border: 0;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`

export const Content = styled.div`
  margin: 10px;
  max-width: 500px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 1000px) {
    max-width: 400px;
  }
`

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  display: flex;
  justify-content: center;
  width: 20px;
  padding: 6px;
  color: white;
  border-radius: 15px;
  font-weight: bold;
  font-size: 11px;
  margin-right: 12px;
`
