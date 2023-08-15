import { styled } from 'styled-components'
import { colors } from '~/styles'

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
`
