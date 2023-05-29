import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';



const LandingPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home') 
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    loginWithRedirect();
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Bienvenido a mi PI Pokemon</h1>
          <button className={styles.button} onClick={handleLogin}>Login</button>
          <>
            <Link to="/registro"><button className={styles.button}>Registrar</button> </Link>
          </>

 </div>
      </div>
    </div>
  );
};

export default LandingPage;
