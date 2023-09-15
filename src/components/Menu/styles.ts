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
  justify-content: space-around;
  padding: 5px 30px;
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #fff;
  padding: 0 60px;

  &.center {
    border-right: 2px solid #fff;
    border-left: 2px solid #fff;
  }
`
