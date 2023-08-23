import { Provider } from 'react-redux'
import AppPage from './components/AppPage'
import { GlobalStyle } from './styles'
import store from './store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <AppPage />
      </Provider>
    </>
  )
}

export default App
