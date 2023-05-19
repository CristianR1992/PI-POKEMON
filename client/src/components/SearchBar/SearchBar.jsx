import { useState } from "react"
import { onSearch } from "../../redux/actions"
import { useDispatch } from "react-redux"
import styles from './SearchBar.module.css';


const SearchBar = () => {

    const dispatch = useDispatch()
    const [nameState, setNameState] = useState('')

    const [error, setError] = useState('')

    const handleSearch = (event) => {
        setNameState(event.target.value)
        setError('')
    }

    const handlerClick = async () => {
        if (nameState.trim() === '') { //quito los espacios vacios
            setError("Ingreso un nombre para la busqueda")
        } else {
            try {
                await dispatch(onSearch(nameState))
            } catch (error) {
                setError("Personaje no encontrado")
            }
        }
    }

    return (
        <div>
            <input type="search" placeholder="Buscar Pokemon" value={nameState} onChange={handleSearch} />
            <button onClick={()=>{handlerClick(); setNameState('')}}></button>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}


export default SearchBar

