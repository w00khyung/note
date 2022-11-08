import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <h1>Home</h1>
    <Link to='/login'>Go to Login</Link>
  </div>
);

export default Home;
