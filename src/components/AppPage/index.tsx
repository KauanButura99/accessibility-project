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

type ItensProps = {
  id: string
  title: string
  description: string
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

const itens: ItensProps[] = [
  {
    id: '01',
    title: 'Item 01',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?'
  },
  {
    id: '02',
    title: 'Item 02',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?'
  },
  {
    id: '03',
    title: 'Item 03',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?'
  },
  {
    id: '04',
    title: 'Exemple 01',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?'
  },
  {
    id: '05',
    title: 'Exemple 02',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?'
  }
]

const AppPage = () => {
  const [pageId, setPageId] = useState('1')
  const [itemId, setItemId] = useState('')
  const [resourceApp, setResourceApp] = useState<ResourceProps>('none')
  const [searchText, setSearchText] = useState('')
  const [startIndex, setStartIndex] = useState(0)

  const selectedItem = (idItem: string) => {
    setItemId(idItem)
  }

  const selectedPage = (idPage: string, resourcePage?: ResourceProps) => {
    setPageId(idPage)

    if (resourcePage) {
      setResourceApp(resourcePage)
    }

    if (idPage === 'search') {
      setSearchText('')
    }
  }

  const searchItem = (textItem: string) => {
    setSearchText(textItem)
    setPageId('searchResults')
  }

  const itensFilter = () => {
    let filteredItens = itens
    if (searchText !== undefined || '') {
      filteredItens = filteredItens.filter((item) => item.title.toLowerCase().search(searchText.toLowerCase()) >= 0)
      return filteredItens
    }

    return itens
  }

  const itemFilter = () => {
    let filteredItem = itens
    if (itemId !== undefined || '') {
      filteredItem = filteredItem.filter((item) => item.id.toLowerCase().search(itemId.toLowerCase()) >= 0)
      return filteredItem
    }
  }

  const itemToRender = itemFilter()
  const showItens = itensFilter()
  const itensToRender = showItens.slice(startIndex, startIndex + 3)

  const handleNext = () => {
    setStartIndex(startIndex + 3)
  }

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 3))
  }

  if (pages) {
    if (itemId !== '') {
      return (
        <S.Container>
          <div className="container">
            {itemToRender?.map((item) => (
              <div key={item.id}>
                <S.Title>{item.title}</S.Title>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </S.Container>
      )
    }

    if (pageId === 'searchResults') {
      if (resourceApp === 'deaf') {
        return (
          <S.Container>
            <div className="container">
              <div className="App">
                <VLibras forceOnload={true} />
                <header className="App-header">
                  <S.Title>Resultado(s) da pesquisa</S.Title>
                  <S.Buttons>
                    <S.DeafContainer className="display-items">
                      {itensToRender.map((item) => (
                        <div key={item.id} className="display-flex">
                          <Button title={item.title} className="deaf-button" />
                          <Button className="check" onClick={() => selectedItem(item.id)}>
                            <>
                              <AiOutlineCheck />{' '}
                            </>
                          </Button>
                        </div>
                      ))}
                      <div className={startIndex === 0 ? 'is-hidden' : 'display-flex'}>
                        <Button title="Itens Anteriores" className="deaf-button" />
                        <Button onClick={handlePrev} className="check">
                          <>
                            <AiOutlineCheck />{' '}
                          </>
                        </Button>
                      </div>
                      <div className={startIndex + 3 >= showItens.length ? 'is-hidden' : 'display-flex'}>
                        <Button title="Próximos Itens" className="deaf-button" />
                        <Button onClick={handleNext} className="check">
                          <>
                            <AiOutlineCheck />{' '}
                          </>
                        </Button>
                      </div>
                      <div className="display-flex">
                        <Button title="Pesquisar novamente" className="deaf-button" />
                        <Button onClick={() => selectedPage('search')} className="check">
                          <>
                            <AiOutlineCheck />{' '}
                          </>
                        </Button>
                      </div>
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
            <S.Title>Resultado(s) da pesquisa</S.Title>
            <S.Buttons>
              {itensToRender.map((item) => (
                <div key={item.id}>
                  <Button title={item.title} onClick={() => selectedItem(item.id)} />
                </div>
              ))}
              <Button title="Itens Anteriores" onClick={handlePrev} className={startIndex === 0 ? 'is-hidden' : ''} />
              <Button
                title="Próximos Itens"
                onClick={handleNext}
                className={startIndex + 3 >= showItens.length ? 'is-hidden' : ''}
              />
              <Button title="Pesquisar novamente" onClick={() => selectedPage('search')} />
            </S.Buttons>
          </div>
        </S.Container>
      )
    }

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
                    <S.InputSearch
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                    />
                    <S.DeafContainer>
                      <Button title="Pesquisar" />
                      <Button className="check" onClick={() => searchItem(searchText)}>
                        <>
                          <AiOutlineCheck />{' '}
                        </>
                      </Button>
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
              <S.InputSearch onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />
              <Button title="Pesquisar" onClick={() => searchItem(searchText)} />
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
                        <Button onClick={() => selectedPage(button.goToId, button.resource)} className="check">
                          <>
                            <AiOutlineCheck />{' '}
                          </>
                        </Button>
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
