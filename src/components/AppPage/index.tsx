import { useState } from 'react'

import VLibras from '@djpfs/react-vlibras'

import Button from '../Button'
import { AiOutlineCheck } from 'react-icons/ai'

import * as S from './styles'

type ResourceProps = 'blind' | 'deaf' | 'none'

type PageProps = {
  id: string
  title: string
  buttons: Array<{
    titleButton: string
    goToId: string
    resource?: ResourceProps
  }>
}

const pages: PageProps[] = [
  {
    id: '1',
    title: 'Você gostaria de utilizar qual recurso para utilizar o aplicativo?',
    buttons: [
      {
        titleButton: 'Recurso para Deficiente Visual',
        goToId: '1.1',
        resource: 'blind'
      },
      {
        titleButton: 'Recurso para Deficiente Auditivo',
        goToId: '1.1',
        resource: 'deaf'
      },
      {
        titleButton: 'Não, obrigado',
        goToId: '1.1',
        resource: 'none'
      }
    ]
  },
  {
    id: '1.1',
    title: 'O que você gostaria de fazer?',
    buttons: [
      {
        titleButton: 'Pesquisar',
        goToId: 'search'
      },
      {
        titleButton: 'Ver promoções',
        goToId: '1.1.2'
      },
      {
        titleButton: 'Ver categorias',
        goToId: '1.1.3'
      }
    ]
  }
]

const AppPage = () => {
  const [pageId, setPageId] = useState('1')
  const [resourceApp, setResourceApp] = useState<ResourceProps>('none')

  const selectedPage = (idPage: string, resourcePage?: ResourceProps) => {
    setPageId(idPage)

    if (resourcePage) {
      setResourceApp(resourcePage)
    }
  }

  if (pages) {
    if (pageId === 'search') {
      if (resourceApp === 'deaf') {
        return (
          <S.Container>
            <div className="container">
              <div className="App">
                <VLibras forceOnload={true} />
                <header className="App-header">
                  <S.Title>O que deseja procurar?</S.Title>
                  <S.Buttons>
                    <S.InputSearch />
                    <S.DeafContainer>
                      <Button title="Pesquisar" onClick={() => selectedPage} />
                      <S.DeafButton className="check" onClick={() => selectedPage}>
                        <>
                          <AiOutlineCheck />{' '}
                        </>
                      </S.DeafButton>
                    </S.DeafContainer>
                  </S.Buttons>
                </header>
              </div>
            </div>
          </S.Container>
        )
      }

      return (
        <S.Container>
          <div className="container">
            <S.Title>O que deseja procurar?</S.Title>
            <S.Buttons>
              <S.InputSearch />
              <Button title="Pesquisar" onClick={() => selectedPage} />
            </S.Buttons>
          </div>
        </S.Container>
      )
    }

    const page = pages.find((pag) => pag.id === pageId)

    if (resourceApp === 'deaf') {
      return (
        <S.Container>
          <div className="container">
            <div className="App">
              <VLibras forceOnload={true} />
              <header className="App-header">
                <S.Title>{page?.title}</S.Title>
                <S.Buttons>
                  {page?.buttons.map((button) => (
                    <div key={button.titleButton}>
                      <S.DeafContainer>
                        <Button title={button.titleButton} />
                        <S.DeafButton onClick={() => selectedPage(button.goToId, button.resource)} className="check">
                          <>
                            <AiOutlineCheck />{' '}
                          </>
                        </S.DeafButton>
                      </S.DeafContainer>
                    </div>
                  ))}
                </S.Buttons>
              </header>
            </div>
          </div>
        </S.Container>
      )
    }

    return (
      <S.Container>
        <div className="container">
          <S.Title>{page?.title}</S.Title>
          <S.Buttons>
            {page?.buttons.map((button) => (
              <div key={button.titleButton}>
                <Button onClick={() => selectedPage(button.goToId, button.resource)} title={button.titleButton} />
              </div>
            ))}
          </S.Buttons>
        </div>
      </S.Container>
    )
  }

  return <div> TESTE </div>
}

export default AppPage
