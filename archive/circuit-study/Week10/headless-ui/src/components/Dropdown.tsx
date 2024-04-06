import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='dropdown' style={{ width: '100%' }}>
      <button
        onClick={toggle}
        style={{
          width: 100,
          marginBottom: 10,
          backgroundColor: 'green',
          padding: '10px 20px',
        }}
      >
        과일
      </button>
      {isOpen && (
        <div
          style={{
            display: 'flex',
            gap: 5,
          }}
        >
          <button>사과</button>
          <button>바나나</button>
          <button>포도</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
