import styled from 'styled-components'
import { colors } from '~/styles'

export const MenuBody = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${colors.darkBlue};
`

export const MenuContainer = styled.div`
  background-color: ${colors.darkGray};
  height: 56px;
  border-radius: 2vw;
  display: flex;
  justify-content: space-between;
  padding: 5px 30px;
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;

  &.center {
    border-right: 1px solid black;
    border-left: 1px solid black;
    padding: 0 50px;
  }
`
