import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkBlue: '#222340',
  lightBlue: '#08CBF5',
  inputBlue: '#0da0bf',
  gray: '#D2D0D0',
  darkGray: '#777777',
  black: '#000',
  white: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '426px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    list-style: none;
  }

  .container {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}) {
      width: 90%;
    }
  }
`
