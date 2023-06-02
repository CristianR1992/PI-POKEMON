import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import pokebola from './pokebola.png'
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import{ clearLogin} from '../../redux/actions'

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const {  logout } = useAuth0();
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    dispatch(clearLogin())
  };
  return (
    <nav className={styles.header}>
      <Link to="/home" className={styles.home}>
        Home
      </Link>
      <Link to="/home">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      {location.pathname === "/home" ? (
        <>
          <Link to="/createPokemon" className={styles.create}>
            Crear Pokemon
          </Link>
          <Link to="/createPokemon">
            <img src={pokebola} alt="pokebola" className={styles.pokebola} />
          </Link>
          <div className={styles.searchBar}>
            <SearchBar />
          </div>
          <button onClick={handleLogout}>LogOut</button>
        </>
      ) : null}
    </nav>
  );
};


export default NavBar;
