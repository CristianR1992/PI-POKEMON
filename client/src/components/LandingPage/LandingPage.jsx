import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Bienvenido a mi PI Pokemon</h1>

          <Link to="/login">
            <button className={styles.button}>Login Manual</button>
          </Link>
          <Link to="/registro">
            <button className={styles.button}>Registrarse</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
