import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux'
import theme from './theme';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(

  <StrictMode>

    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ToastContainer position='bottom-right' autoClose={1500} closeOnClick />
      </Provider>
    </ThemeProvider>


  </StrictMode>,
)
