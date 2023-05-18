import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import pokebola from './pokebola.png'

const NavBar = () => {
  return (
    <nav className={styles.header}>
      <Link to="/home" className={styles.home}>Home</Link>
      <Link to="/home" ><img src={logo} alt="Logo" className={styles.logo} /></Link>
      <Link to="/createPokemon" className={styles.create}>Crear Pokemon</Link>
      <Link to="/createPokemon"><img src={pokebola} alt="pokebola" className={styles.pokebola} /></Link>
      <div className={styles.searchBar}><SearchBar /> </div>
    </nav>
  );
};

export default NavBar;
