const DEFAULT_COUNT = 100;
const DEFAULT_DELAY = 500;

interface SomeComponentProps {
  prop1: string;
  prop2: string;
}

const handleClose = () => {
  // react와 상관없는 코드
};

const SomeComponent = ({ prop1, prop2 }: SomeComponentProps) => {
  let isHold = false;

  const ref = useRef(null);

  const location = useLocation();
  const queryClient = useQueryClient();
  const state = useSelector((state) => state.someState);

  const state = useCustomHooks((state) => state.someState);

  const [state, setState] = useState('someState');

  const onClose = () => handleClose();

  useEffect(() => {}, []);

  if (isHold) {
    return <div>Hold</div>;
  }

  return <div></div>;
};
