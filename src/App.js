import './App.css';
import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
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
