import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getPokemons} from '../../redux/actions'
import { Link } from 'react-router-dom';

const Home = ()=>{
const dispatch = useDispatch()
const allPokemons = useSelector((state)=> state.pokemones) // es lo mismo que el mapStateToProps..  TE TRAE TODO LO QUE ESTA EN EL ESTADO POKEMONS
useEffect (()=>{                            // ME TRAIGO DEL ESTADO CUANDO EL PERSONAKE SE MONTA
    dispatch(getPokemons())               // es lo mismo del mapDispatchToProps
},[pokemones])// segundo paramentro donde mira, para que no haga loop infinito. MONTATE Y EJECUTATE SIEMPRE Y CUANDO PASE ESO 


const getPokemonsHandler = (event)=>{
   event.preventDefault()
   dispatch(getPokemons)
}
return (
    <div>
   <Link to = '/pokemon'>CrearPersonaje</Link>
   <h1>Buscando Pokemones</h1>
   <button onClick={event=>{getPokemonsHandler(event)}}>Pokemones</button>

   <div>
<select> 
    <option value='All'>Todos</option >
    <option value='Api'>Originales</option >
    <option value='BDD'>Creados</option >
</select>
<select>
    <option value="ascendente">A - Z</option>
    <option value="descendente">Z - A</option>
</select>
<select>
    <option value="fuertes">Mas fuertes</option>
    <option value="debiles">Mas debiles</option>
</select>

<select>
    <option value="">Filtar por tipos</option> 
</select>
      </div>
    </div>
)  // TENGO QUE HACER EL FILTRO POR TYPES

}

export default Home;
