import { styled } from 'styled-components'
import { breakpoints, colors } from '~/styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.gray};
  color: ${colors.black};
  font-size: 40px;
  border: none;
  border-radius: 30px;
  display: block;
  width: 100%;
  padding: 24px 0;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 25px;
    margin-bottom: 10px;
  }

  &.deaf-button {
    width: 80%;
    cursor: default;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  &.check {
    width: 100%;
    max-width: 120px;
    margin-left: 10px;

    @media (max-width: ${breakpoints.mobile}) {
      max-width: 100%;
      margin-left: 0;
      margin-top: 2px;
      padding: 10px;
    }
  }
`
