import * as S from './styles'

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
          <S.MenuButton onClick={onClickBack}>Voltar</S.MenuButton>
          <S.MenuButton className="center" onClick={onClickHome}>Home</S.MenuButton>
          <S.MenuButton onClick={onClickSearch}>Pesquisar</S.MenuButton>
        </S.MenuContainer>
      </div>
    </S.MenuBody>
  )
}

export default Menu
