import { useState } from 'react'

import VLibras from '@djpfs/react-vlibras'

import Button from '../Button'
import { AiOutlineCheck } from 'react-icons/ai'

import * as S from './styles'
import Menu from '../Menu'

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
  urlImage: string
  descriptionImage: string
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?',
    urlImage:
      'https://static.lojanba.com/produtos/tenis-nike-nba-air-jordan-xxxvii-low-masculino/24/JD8-2242-024/JD8-2242-024_zoom1.jpg?ts=1680526681&',
    descriptionImage: 'Tenis Nike NBA Air Jordan XXXVII Low Masculino - Branco+Vermelho'
  },
  {
    id: '02',
    title: 'Item 02',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?',
    urlImage: 'https://cdn.awsli.com.br/2500x2500/1059/1059368/produto/54812969/b602a82574.jpg',
    descriptionImage: 'Tênis Air Jordan 1 X Royal Toe Preto Azul Unissex'
  },
  {
    id: '03',
    title: 'Item 03',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?',
    urlImage:
      'https://dptafza4tn3d0.cloudfront.net/cache/catalog/CV23131/tenis-nike-air-jordan-1-mid-amarelo-CV23131(7)-750x937.jpg',
    descriptionImage: 'Tênis Nike Air Jordan 1 Mid Amarelo'
  },
  {
    id: '04',
    title: 'Exemple 01',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?',
    urlImage: 'https://imgnike-a.akamaihd.net/1920x1920/016510PA.jpg',
    descriptionImage: 'Tênis Air Jordan 1 Low Masculino - Foto 1'
  },
  {
    id: '05',
    title: 'Exemple 02',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus unde tempore, tenetur odit aperiam molestiae veniam qui reprehenderit, iste officiis corporis adipisci ut, praesentium ex animi laudantium natus ipsa?',
    urlImage:
      'https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTA3OSx3XzE5MTgseF80NSx5XzU2OA==/krxirs3henfdrw3tr45d/air-jordan-1-high-true-blue-dz5485-410-pair.jpg?downsize=920:*&output-format=auto&output-quality=auto',
    descriptionImage: `Air Jordan 1 High 'True Blue' DZ5485 410 Pair`
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

  const goToHome = () => {
    setPageId('1')
    setItemId('')
    setResourceApp('none')
    setStartIndex(0)
    setSearchText('')
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
      if (resourceApp === 'deaf') {
        return (
          <>
            <S.Container className="title-container">
              <div className="container">
                <div className="App">
                  <VLibras forceOnload={true} />
                  <header className="App-header">
                    {itemToRender &&
                      itemToRender.map((item) => (
                        <div key={item.id}>
                          <S.Title className="title-item">{item.title}</S.Title>
                          <S.ItemImage src={item.urlImage} alt={item.descriptionImage} />
                          <S.Description>{item.description}</S.Description>
                          <S.DeafContainer>
                            <Button title="Voltar para Pesquisa" className="deaf-button" />
                            <Button
                              className="check"
                              onClick={() => {
                                selectedPage('search')
                                setItemId('')
                              }}
                            >
                              <>
                                <AiOutlineCheck />{' '}
                              </>
                            </Button>
                          </S.DeafContainer>
                        </div>
                      ))}
                  </header>
                </div>
              </div>
            </S.Container>
            <Menu onClickHome={goToHome}/>
          </>
        )
      }
      return (
        <>
          <S.Container className="title-container">
            <div className="container">
              {itemToRender &&
                itemToRender.map((item) => (
                  <div key={item.id}>
                    <S.Title className="title-item">{item.title}</S.Title>
                    <S.ItemImage src={item.urlImage} alt={item.descriptionImage} />
                    <S.Description>{item.description}</S.Description>
                    <Button
                      title="Voltar para Pesquisa"
                      onClick={() => {
                        selectedPage('search')
                        setItemId('')
                      }}
                    />
                  </div>
                ))}
            </div>
          </S.Container>
          <Menu onClickHome={goToHome}/>
        </>
      )
    }

    if (pageId === 'searchResults') {
      if (resourceApp === 'deaf') {
        return (
          <>
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
                            <Button title={item.title} className="deaf-button item-buttom" />
                            <Button className="check item-buttom" onClick={() => selectedItem(item.id)}>
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
            <Menu onClickHome={goToHome}/>
          </>
        )
      }
      return (
        <>
          <S.Container>
            <div className="container">
              <S.Title>Resultado(s) da pesquisa</S.Title>
              <S.Buttons>
                {itensToRender.map((item) => (
                  <div key={item.id}>
                    <Button className="item-buttom" title={item.title} onClick={() => selectedItem(item.id)} />
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
          <Menu onClickHome={goToHome}/>
        </>
      )
    }

    if (pageId === 'search') {
      if (resourceApp === 'deaf') {
        return (
          <>
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
                        <Button title="Pesquisar" className="deaf-button" />
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
            <Menu onClickHome={goToHome}/>
          </>
        )
      }

      return (
        <>
          <S.Container>
            <div className="container">
              <S.Title>O que deseja procurar?</S.Title>
              <S.Buttons>
                <S.InputSearch onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />
                <Button title="Pesquisar" onClick={() => searchItem(searchText)} />
              </S.Buttons>
            </div>
          </S.Container>
          <Menu onClickHome={goToHome}/>
        </>
      )
    }

    const page = pages.find((pag) => pag.id === pageId)

    if (resourceApp === 'deaf') {
      return (
        <>
          <S.Container>
            {page && (
              <div className="container">
                <div className="App">
                  <VLibras forceOnload={true} />
                  <header className="App-header">
                    <S.Title>{page.title}</S.Title>
                    <S.Buttons>
                      {page.buttons.map((button) => (
                        <div key={button.titleButton}>
                          <S.DeafContainer>
                            <Button title={button.titleButton} className="deaf-button" />
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
            )}
          </S.Container>
          <Menu onClickHome={goToHome}/>
        </>
      )
    }

    return (
      <>
        <S.Container>
          {page && (
            <div className="container">
              <S.Title>{page.title}</S.Title>
              <S.Buttons>
                {page.buttons.map((button) => (
                  <div key={button.titleButton}>
                    <Button onClick={() => selectedPage(button.goToId, button.resource)} title={button.titleButton} />
                  </div>
                ))}
              </S.Buttons>
            </div>
          )}
        </S.Container>
        <Menu onClickHome={goToHome}/>
      </>
    )
  }

  return <div> Loading ... </div>
}

export default AppPage
