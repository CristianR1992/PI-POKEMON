import { GET_POKEMONES, CLEAN_DETAIL, GET_POKEMONES_DETAIL, GET_TYPES, GET_SORT, GET_SORT_ATTACK, FROM_API, FILTER_BY_TYPE, CREATE_POKEMON, ON_SEARCH ,DELETE_POKEMONES, REGISTER, LOGIN_FN, LOGOUT} from "./actions-types";

const initialState = {
  pokemones: [],
  pokemonesDetail: [],
  types: [],
  filtered: [],
  userLogin: {
    access: false, 
  },
  isAuthenticated: false
  

}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_POKEMONES:
      return {
        ...state,
        pokemones: action.payload,
        filtered: action.payload,
      }

    case DELETE_POKEMONES:
    const deleted= state.filtered.filter((poke)=>poke.id !== action.payload)
      return{ 
        ...state,
        pokemones: [...deleted],
        filtered:[...deleted]
       }
   
    case GET_POKEMONES_DETAIL:
      return {
        ...state,
        pokemonesDetail: action.payload
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        pokemonesDetail: [],                             
        pokemones: [],
        types: [],
        filtered: [],
      }

    case GET_SORT:
      const allCopy = [...state.pokemones];
      allCopy.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (action.payload === "A") {
          if (nameA < nameB) return -1; //a-b
          if (nameA > nameB) return 1; //b-a
          return 0;
        } else {
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        }
      });
      return {
        ...state,
        pokemones: [...allCopy]

      }
    case GET_SORT_ATTACK:
      const allCopy2 = [...state.pokemones];
      allCopy2.sort((a, b) => {
        if (action.payload === "debiles") {
          return a.attack - b.attack
        } else {
          return b.attack - a.attack
        }
      })
      return {
        ...state,
        pokemones: [...allCopy2]
      }

    case FROM_API:
      if (action.payload === "fromBDD") {
        return {
          ...state,
          pokemones: state.filtered?.filter(one => one.fromBDD)
        }
      }
      else if (action.payload === "vieneDeApi") {
        return {
          ...state,
          pokemones: state.filtered?.filter(one => !one.fromBDD)
        }
      }
      else {
        return {
          ...state,
          pokemones: state.filtered

        }
      }
    case GET_TYPES:
      return {
        ...state,
        types: action.payload

      }

    case FILTER_BY_TYPE:
      const type = action.payload;
      if (type === "All") {
        return {
          ...state,
          pokemones: [...state.filtered]
        }
      } else {
        const filteredPokemones = state.filtered.filter((pokemon) => {
          const fil = pokemon.Types.filter(na => na.name === type)
          if (fil.length) {
            return true
          } else {
            return false
          }
        })
        return {
          ...state,
          pokemones: [...filteredPokemones]
        };

      }
    case CREATE_POKEMON:
      return {
        ...state,
        pokemones: [...state.pokemones, action.payload],
       
      }

    case ON_SEARCH:
      try {
        const response = action.payload
        const pokeName = response[0].name
        const busqueda = state.filtered.filter((pokemon2) => {
          const fil2 = pokemon2.name.includes(pokeName)
          if (fil2) {
            return true
          } else {
            return false
          }
        })
        return {
          ...state,
          pokemones: [...busqueda]

        }
      } catch (error) {
        throw new Error("Personaje no enontrado")
      }
     case REGISTER:
  return {
    ...state,
    userLogin: {
      ...state.userLogin,
      access: true, // Actualizar el estado userLogin.access
    },
    isAuthenticated: true
  };

      
      case LOGIN_FN:
        return {
          ...state,
          isAuthenticated: true
        }
      
        case LOGOUT:
          return {
            ...state,
            userLogin: {
              access: false
            },
            isAuthenticated: false
          };
    
    
    default:
      return { ...state }
  }
}

export default reducer;