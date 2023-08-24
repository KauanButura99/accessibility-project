import { styled } from 'styled-components'
import { breakpoints, colors } from '~/styles'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.darkBlue};
  padding: 96px 0;
  text-align: center;

  .is-hidden {
    display: none;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 0;
  }
`

export const Title = styled.h2`
  color: ${colors.lightBlue};
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 80px;

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
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 10px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
  }
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
