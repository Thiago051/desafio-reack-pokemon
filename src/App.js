import './App.css';
import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/themeToggler';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoutes />
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
