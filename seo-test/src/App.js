import logo from './logo.svg';
import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SEO Test</title>
        <meta property='og:title' content='SEO Test' />
        <meta property='og:description' content='SEO Test - Description' />
        <meta
          property='og:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3f6fyQ3Sn3F6XGNFwethGoCoMD2RGBKhyffgL2H4FCw&s'
        />
      </Helmet>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </HelmetProvider>
  );
}

export default App;
