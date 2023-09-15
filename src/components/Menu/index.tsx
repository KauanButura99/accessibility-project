import * as S from './styles'
import { IoArrowBackSharp as Back } from 'react-icons/io5/'
import { IoHomeOutline as Home } from 'react-icons/io5'
import { IoSearchOutline as Search } from 'react-icons/io5'

type Props = {
  onClickHome: () => void
  onClickBack?: () => void
  onClickSearch?: () => void
}

const Menu = ({ onClickBack, onClickHome, onClickSearch }: Props) => {
  return (
    <S.MenuBody>
      <div className="container">
        <S.MenuContainer>
          <S.MenuButton onClick={onClickBack}>
            <Back />
          </S.MenuButton>
          <S.MenuButton className="center" onClick={onClickHome}>
            <Home />
          </S.MenuButton>
          <S.MenuButton onClick={onClickSearch}>
            <Search />
          </S.MenuButton>
        </S.MenuContainer>
      </div>
    </S.MenuBody>
  )
}

export default Menu
