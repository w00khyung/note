import { Link } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () => (
  <div className={styles.container}>
    <h1>Login</h1>
    <Link to='/'>Go to Home</Link>
  </div>
);

export default Login;
