import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemones, getSort, getOrderAttack, fromApi, filterByTypes, getTypes, } from '../../redux/actions'
import Pokemones from '../Pokemones/Pokemones';
import Paginado from '../paginado/Paginado';
import Nav from '../Nav/Nav'
import styles from'./Home.module.css'
import { cleanDetail } from "../../redux/actions";
const Home =()=>{
    const dispatch = useDispatch()
    const allPokemones = useSelector((state) => state.pokemones) // es lo mismo que el mapStateToProps..
    const types = useSelector((state) => state.types);
   
    const [currentPage,setCurrentPage]=useState(1)
    const [pokemonesPerPage,setPokemonesPerPage]= useState(12)
    const indexOfLastPokemon = currentPage * pokemonesPerPage //12
    const indexOffFirstPokemon = indexOfLastPokemon -pokemonesPerPage //0
    const currentPokemones = allPokemones.slice(indexOffFirstPokemon, indexOfLastPokemon)

    const pages = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(() => { 
        dispatch(getPokemones());         // ME TRAIGO DEL ESTADO CUANDO EL PERSONAJE SE MONTA
           dispatch(getTypes())                
        return () => dispatch(cleanDetail())
    }, [ dispatch])                       // segundo paramentro donde mira, para que no haga loop infinito. MONTATE Y EJECUTATE SIEMPRE Y CUANDO PASE ESO 
    
    const getPokemonsHandler = (event) => {
        event.preventDefault();
        dispatch(getPokemones());
    };
    const handleOrder = (event) => {
        dispatch(getSort(event.target.value));
    };
    const handlerOrderAttack = (event) => {
        dispatch(getOrderAttack(event.target.value));
    };
    const handlerFrom = (event) => {
        dispatch(fromApi(event.target.value));
        
    };
    const handlerTypes = (event) => {
        dispatch(filterByTypes(event.target.value));
    };
    return (
        <div >
            <div>
               <Nav/>
        </div>
            <div >
                <select className={styles.selectInput}onChange={handlerFrom}>
                    <option value='All'>Todos</option>
                    <option value='vieneDeApi'>Originales</option>
                    <option value='fromBDD'>Creados</option>
                </select>
                <select className={styles.selectInput}onChange={handleOrder}>
                    <option value="A">A - Z</option>
                    <option value="D">Z - A</option>
                </select>
                <select className={styles.selectInput}onChange={handlerOrderAttack}>
                    <option value="fuertes">Mas fuertes</option>
                    <option value="debiles">Mas debiles</option>
                </select>
                <select className={styles.selectInput}name="types" onChange={handlerTypes}>
                    <option value="All">All types</option>
                    {types.map((type) => (
                        <option value={type.name} key={type.name}>{type.name}</option>
                    ))}
                </select>
                <button className={styles.button}onClick={(event) => { getPokemonsHandler(event) }}>Reset</button>
            </div>
            <Pokemones currentPokemones ={ currentPokemones} />
            <Paginado pages={pages} pokemonesPerPage={pokemonesPerPage} allPokemones={allPokemones.length} currentPage={currentPage} />

           </div>
       
    )
}
export default Home;