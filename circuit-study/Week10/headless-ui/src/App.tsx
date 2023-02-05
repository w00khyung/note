import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from './components/Button';
import HeadlessDropdown from './components/HeadlessDropdown';
import Dropdown from './components/Dropdown';
import Checkbox from './components/CheckBox';
import CheckBoxWrapper from './components/CheckBox';
import { useCheckbox } from './hooks/useCheckbox';

function App() {
  const { isChecked, onChange } = useCheckbox();

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <h1>Headless Component with React</h1>
      </div>
      <div className='card'>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Button />
        {/* <Button
          style={{
            color: '#FFFFFF',
            backgroundColor: '#008AFF',
            borderRadius: '10px',
            padding: '12px 24px',
          }}
        >
          Primary
        </Button> */}
        {/* <Button
          style={{
            color: isOpen ? 'white' : 'black',
            backgroundColor: isOpen ? 'green' : 'red',
          }}
          onClick={toggle}
        >
          버튼 {isOpen ? 'ON' : 'OFF'}
        </Button>
        <Button
          style={{
            color: isOpen ? 'white' : 'black',
            backgroundColor: isOpen ? 'red' : 'green',
          }}
          onClick={toggle}
        >
          버튼 {isOpen ? 'ON' : 'OFF'}
        </Button> */}
        {/* <Dropdown /> */}
        {/* <Checkbox
          label='개인약관 동의'
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          isCheckBoxRight={false}
        /> */}
        <CheckBoxWrapper>
          <CheckBoxWrapper.Label>개인약관 동의</CheckBoxWrapper.Label>
          <CheckBoxWrapper.Checkbox isChecked={isChecked} onChange={onChange} />
        </CheckBoxWrapper>
        <CheckBoxWrapper>
          <CheckBoxWrapper.Label>개인약관 동의</CheckBoxWrapper.Label>
        </CheckBoxWrapper>
      </div>
    </div>
  );
}

export default App;
