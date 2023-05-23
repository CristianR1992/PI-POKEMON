import { cleanDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonesDetail } from "../../redux/actions";
import { useParams} from 'react-router-dom'
import styles from './Detail.module.css'


const Detail = () => {
    const dispatch = useDispatch()
    const pokemonesDetails = useSelector((state) => state.pokemonesDetail) // del estado dame del pokemonesDetail

    const { id } = useParams()
    useEffect(() => {
        dispatch(getPokemonesDetail(id))
        return () => dispatch(cleanDetail())   // hago la limpieza cuando se desmonta, cuando se desmonta? cuando hay un return
    }, [dispatch, id])                  // me quedo mirando a id porque va cambiando 
    return (

        <div>
          

            <div className={styles.card}>
                {
                    pokemonesDetails?.name ? (
                        <>
                            <img className={styles.image} src={pokemonesDetails?.image} alt="" />
                            <h1 className={styles.name}>{pokemonesDetails?.name.toUpperCase()} </h1>
                            <h2 className={styles.attack}>Attack ➟ {pokemonesDetails?.attack} %</h2>
                            <h2 className={styles.life}>Life ➟ {pokemonesDetails?.life} %</h2>
                            <h2 className={styles.defense}>Defense ➟ {pokemonesDetails?.defense} %</h2>
                            <h2 className={styles.speed}>Speed ➟ {pokemonesDetails?.speed} km/h</h2>
                            <h2 className={styles.weight}>Weight ➟ {pokemonesDetails?.weight} lb</h2>
                            <h2 className={styles.height}>Height ➟ {pokemonesDetails?.height} cm</h2>
                            <div className={styles.typesContainer}>
                                <h2 className={styles.typesName}>Types  ➟</h2>
                                <div className={styles.types}>
                                    {pokemonesDetails?.Types.map((type, index) => (
                                        <span key={index} className={styles.type}>{type.name}</span>
                                    ))}
                                </div>
                            </div>

                        </>
                    ) : (
                        <h2 className={styles.h2}>Loading...</h2>
                    )}
            </div>
        </div>
    )

}

export default Detail