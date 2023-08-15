import { ButtonContainer } from './styles'

type ButtonProps = {
  title?: string
  onClick?: () => void
  children?: JSX.Element
  className?: string
}

const Button = ({ title, onClick, children, className }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} className={className}>
      {title}
      {children}
    </ButtonContainer>
  )
}

export default Button
