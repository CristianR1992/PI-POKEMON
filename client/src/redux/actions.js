import { GET_POKEMONES, CLEAN_DETAIL, GET_POKEMONES_DETAIL, GET_TYPES, GET_SORT, GET_SORT_ATTACK, FROM_API,FILTER_BY_TYPE, CREATE_POKEMON, ON_SEARCH, DELETE_POKEMONES, REGISTER, LOGIN_FN,LOGOUT} from "./actions-types";
import axios from 'axios'


export const getPokemones = ()=>{
return async function(dispatch){
        const response = await axios.get("/pokemon")
       return dispatch ({
        type:GET_POKEMONES,
        payload: response.data
       })
}}

export const getPokemonesDetail = (id)=>{
    return async function (dispatch){
        const response = await axios.get(`/pokemon/${id}`)
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
        const response = await axios.get("/types")
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
    try {
        return async function(dispatch){
       const response= await axios.post("/pokemon",form)
    return dispatch({
        type: CREATE_POKEMON,
        payload:response
    })
}
}
        
     catch (error) {
        window.alert("Pokemon repetido")
    } 
}

export const onSearch =(nameState)=>{
    return async function(dispatch){
        const response = await axios.get(`/pokemon/name?name=${nameState}`)
      return dispatch({
        type:ON_SEARCH,
        payload:response.data
      })
    }       
    }

export const deletePokemones = (id)=>{
    return async function (dispatch){
        const response = await axios.delete(`/pokemon/delete/${id}`)
        return dispatch({
            type:DELETE_POKEMONES,
            payload:response.data
        })
    }
} 

export const registrarse = (register) => {
    return async function (dispatch) {
      try {
        const response = await axios.post("/register", register);
        const userData = response.data; // Extraer los datos del usuario registrado
        return dispatch({
          type: REGISTER,
          payload: userData, // Pasar los datos del usuario registrado como payload
        });
      } catch (error) {
        console.error("Error al registrar:", error);
        throw error; // Lanzar el error para que pueda ser capturado en el componente
      }
    };
  };
  

export const loginFn=(login)=>{
    return async function (dispatch){    
try {
    const response = await axios.post("/login", login)
        if (response.data.access === true) {
            localStorage.setItem('token', response.data.token); //guardo el token en el localstorage
        return dispatch({
            type:LOGIN_FN,
            payload:response.data
        })
    }
} catch (error) {
    return error
}
    }}


    export const validateToken = (token) => {
        return async (dispatch) => {
          try {
            const response = await axios.post('/validateToken', null, {
              headers: {
                Authorization: token,
              },
            });
      
            const { validate } = response.data;
            if (validate) {
              dispatch({
                type: LOGIN_FN,
                payload: { access: true },
              });
            } else {
              console.log('El token no es válido');
            }
          } catch (error) {
            console.error('Error al validar el token:', error);
          }
        };
      };
      

    export const logOut = () => {
        return async (dispatch) => {
          try {
            dispatch({
              type: LOGOUT
            });
          } catch (error) {
            console.error('Error al realizar el logout:', error);
          }
        };
      };
    