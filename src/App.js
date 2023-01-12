import './App.css';
import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/ThemeContext';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoutes />
        <ToastContainer autoClose={3000}/>
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export default App;
