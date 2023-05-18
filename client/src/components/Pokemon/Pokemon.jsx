import { Link } from "react-router-dom"
import styles from'./Pokemon.module.css'
const Pokemon = (pokemon) => {
   const types = pokemon.Types.join('-')
    return (
        <div key={pokemon.id} className={styles.card}>
            <h1 className={styles.id}>#{pokemon.id?.length >3? pokemon.id.slice(0,3): pokemon.id}</h1> 
            <Link to={`./${pokemon.id}`}>
            <img className={styles.imagen}src={pokemon.image} alt={pokemon.name} /></Link>
            <h2 className={styles.name}>{pokemon.name}</h2>
            <h2 className={styles.types}>{types}</h2>
            </div>
    )
    
}

export default Pokemon