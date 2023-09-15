import { Provider } from 'react-redux'
import AppPage from './components/AppPage'
import { GlobalStyle } from './styles'
import store from './store'
// import Menu from './components/Menu'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <AppPage />
        {/* <Menu /> */}
      </Provider>
    </>
  )
}

export default App
