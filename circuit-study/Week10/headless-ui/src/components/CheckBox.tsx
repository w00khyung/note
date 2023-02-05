type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
};

// const Checkbox = ({
//   label,
//   isChecked,
//   onChange,
//   ischeckBoxRight,
// }: CheckboxProps) => {
//   return (
//     <label>
//         {
//             ischeckBoxRight ? (

//                 <>
//                 </>
//             )
//         }
//       <input type='checkbox' checked={isChecked} onChange={onChange} />
//       <span>{label}</span>
//     </label>
//   );
// };

const CheckBoxWrapper = ({ children }: React.PropsWithChildren<{}>) => {
  return <label>{children}</label>;
};

const Checkbox = ({ isChecked, onChange }: CheckboxProps) => {
  return <input type='checkbox' checked={isChecked} onChange={onChange} />;
};

const Label = ({ children }: React.PropsWithChildren<{}>) => {
  return <span>{children}</span>;
};

CheckBoxWrapper.Checkbox = Checkbox;
CheckBoxWrapper.Label = Label;

export default CheckBoxWrapper;
