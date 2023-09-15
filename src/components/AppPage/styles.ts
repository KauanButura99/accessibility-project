import { styled } from 'styled-components'
import { breakpoints, colors } from '~/styles'

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${colors.darkBlue};
  padding: 40px 0;
  text-align: center;

  &.title-container {
    padding: 48px 0;
  }

  .is-hidden {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 0;
  }
`

export const Title = styled.h2`
  color: ${colors.lightBlue};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 60px;

  &.title-item {
    margin-bottom: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 25px;
    margin-bottom: 30px;
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 150px;
    max-height: 150px;
    margin-bottom: 10px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
`

export const InputSearch = styled.input`
  background-color: ${colors.white};
  color: ${colors.darkBlue};
  font-size: 32px;
  border: none;
  border-radius: 2vw;
  width: 100%;
  padding: 12px 8px;
  text-align: center;
  outline: 5px solid ${colors.inputBlue};

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 10px;
  }
`

export const Description = styled.p`
  color: ${colors.white};
  font-size: 25px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`

export const DeafContainer = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }

  &.display-items {
    flex-direction: column;
    gap: 30px;

    @media (max-width: ${breakpoints.mobile}) {
      gap: 16px;
    }
  }

  .display-flex {
    display: flex;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
    }
  }
`
