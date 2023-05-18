import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Bienvenido a mi PI Pokemon</h1>
          <Link to="/home">
            <button className={styles.button}>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
