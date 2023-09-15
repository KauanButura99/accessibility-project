import { styled } from 'styled-components'
import { breakpoints, colors } from '~/styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.gray};
  color: ${colors.black};
  font-size: 28px;
  font-weight: 700;
  border: none;
  border-radius: 2vw;
  display: block;
  width: 100%;
  padding: 12px 5px;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  &.deaf-button {
    width: 80%;
    cursor: default;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  &.item-buttom {
    background-color: ${colors.white};
    border: 5px solid ${colors.inputBlue};
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
