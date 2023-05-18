import { GET_POKEMONES, CLEAN_DETAIL, GET_POKEMONES_DETAIL, GET_TYPES, GET_SORT, GET_SORT_ATTACK, FROM_API,FILTER_BY_TYPE, CREATE_POKEMON, ON_SEARCH} from "./actions-types";
import axios from 'axios'


export const getPokemones = ()=>{
return async function(dispatch){
        const response = await axios.get("http://localhost:3001/pokemon")
       return dispatch ({
        type:GET_POKEMONES,
        payload: response.data
       })
}}

export const getPokemonesDetail = (id)=>{
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemon/${id}`)
        return dispatch({
            type: GET_POKEMONES_DETAIL,
            payload: response.data
        })

    } 
}
export const cleanDetail = ()=>{ //limpio ele stado en la parte de detalle
    return{type:CLEAN_DETAIL}

}

export const getTypes = ()=>{
    return async function (dispatch){
        const response = await axios.get("http://localhost:3001/types")
        return dispatch ({
            type:GET_TYPES,
            payload:response.data
        })
    }
}

export const getSort =(order)=>{
    return {
        type:GET_SORT,
        payload:order
    }
}

export const getOrderAttack=(orden)=>{
    return{
        type:GET_SORT_ATTACK,
        payload:orden
    }
}

export const fromApi=(payload)=>{
    return{
        type:FROM_API,
        payload
    }
}

export const filterByTypes=(type)=>{
    return{
        type:FILTER_BY_TYPE,
        payload:type
    }
}

export const createPokemon=(form)=>{
    return async function(dispatch){
       const response= await axios.post("http://localhost:3001/pokemon",form)
    return dispatch({
        type: CREATE_POKEMON,
        payload:response
    })
}
}

export const onSearch =(nameState)=>{
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/pokemon/name?name=${nameState}`)
      return dispatch({
        type:ON_SEARCH,
        payload:response.data
      })
    }
        
    }