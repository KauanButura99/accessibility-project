import { styled } from 'styled-components'
import { colors } from '~/styles'
import Button from '../Button'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.darkBlue};
  padding: 96px 0;
  text-align: center;
`

export const Title = styled.h2`
  color: ${colors.lightBlue};
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 80px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const InputSearch = styled.input`
  background-color: ${colors.white};
  color: ${colors.darkBlue};
  font-size: 40px;
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 24px 16px;
  text-align: center;
  outline: 5px solid ${colors.lightBlue};
`

export const DeafButton = styled(Button)`
  &.check {
    width: 100%;
    max-width: 120px;
    margin-left: 10px;
  }
`
export const DeafContainer = styled.div`
  display: flex;
`
