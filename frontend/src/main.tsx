import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Pages
import { Home } from './pages/Home'

// Styles
import { GlobalStyle } from './styles'

// Store
import rootReducer from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootReducer}>
      <Home />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
