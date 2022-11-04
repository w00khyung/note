import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>SEO Test</title>
        <meta
          property='og:image'
          content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3f6fyQ3Sn3F6XGNFwethGoCoMD2RGBKhyffgL2H4FCw&s'
        />
        <meta property='og:title' content='SEO 테스트입니다. - title' />
        <meta
          property='og:description'
          content='SEO 테스트입니다. - description'
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
    </div>
  );
}

export default App;
