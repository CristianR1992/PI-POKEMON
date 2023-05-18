import { cleanDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonesDetail } from "../../redux/actions";
import { useParams, Link } from 'react-router-dom'


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
            <Link to={'/home'}><button >Volver a la Pagina Princial </button></Link>
            {
                pokemonesDetails?.name ? (
                    <>

                        <img src={pokemonesDetails?.image} alt="" />
                        <h1 >Name: {pokemonesDetails?.name}</h1>
                        <h3 >Attack: {pokemonesDetails?.attack}</h3>
                        <h3>Life: {pokemonesDetails?.life}</h3>
                        <h3 >Defense: {pokemonesDetails?.defense}</h3>
                        <h3 >Speed: {pokemonesDetails?.speed}</h3>
                        <h3 >Weight: {pokemonesDetails?.weight}</h3>
                        <h3 >Height: {pokemonesDetails?.height}</h3>


                        <div>
                            Types: {pokemonesDetails?.Types.map((type, index) => (
                                <h5 key={index}>{type.name}</h5>
                            ))}
                        </div>
                    </>
                ) : (
                    <h2>cargando...</h2>
                )}    </div>)


}

export default Detail