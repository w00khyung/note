import { ButtonHTMLAttributes, useState } from 'react';

// const Button = () => {
//   // 1. 데이터
//   const [state, setState] = useState(false);

//   return (
//     // 2. UI
//     <button
//       // 3. 상호작용
//       onClick={() => {
//         setState((state) => !state);
//       }}
//     >
//       버튼 {state ? 'ON' : 'OFF'}
//     </button>
//   );
// };

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button style={{}} {...props} />;
};

export default Button;
