import Pokemon from '../Pokemon/Pokemon'
import styles from './Pokemones.module.css'

const Pokemones = ({ currentPokemones }) => {
  
  return (
    <div className={styles.container}>
    
      {currentPokemones.map(({ name, id, image,Types }) => (
        <Pokemon key={`${id}-${name}`} name={name} image={image} id={id} Types={Types &&Types.map((type)=>type.name)}/>
      ))}
    </div>
  )
}

export default Pokemones
