const axios = require('axios')
const { Types, Pokemon } = require('../db.js')

const getPokeByApi = async () => {
  let arrayPokeApi = []
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=60")
    const arrayResultApi = response.data.results.map((pokemon) => pokemon.url)
    await axios.all(arrayResultApi.map((arrayResultApi) => axios.get(arrayResultApi)))
      .then(
        (foundPokemons) => {
          foundPokemons.map((foundPokemon) => arrayPokeApi.push({
            id: foundPokemon.data.id,
            name: foundPokemon.data.name,
            image: foundPokemon.data.sprites.other['official-artwork'].front_default,
            life: foundPokemon.data.stats[0].base_stat,
            attack: foundPokemon.data.stats[1].base_stat,
            defense: foundPokemon.data.stats[2].base_stat,
            speed: foundPokemon.data.stats[5].base_stat,
            height: foundPokemon.data.height,
            weight: foundPokemon.data.weight,
            Types:foundPokemon.data.types.map((type)=>{return{name:type.type.name}}),
            fromBDD: false
          }))
        })
    return arrayPokeApi;
  } catch (error) { 
    return ({error:"No se pudieron subir los datos de la api"})
  }
}

const getPokeByBD = async () => {
  try {
    const result = await Pokemon.findAll({
      include: {
        model: Types,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    })
    return result
  } catch (error) { 
    return ({error:"hubo un error al cargar la BDD"})
  }
}

const getAllPokemons = async () => {

  const apiInfo = await getPokeByApi();
  const dbInfo = await getPokeByBD();
  return [...apiInfo, ...dbInfo]
}

const getPokemonById = async (id, source) => {
  try {

    if (source === "api") {
      const pokemons = await getPokeByApi()
      const pokemon = pokemons.filter(elem => elem.id == id)
      return pokemon[0]
    }
    else {
      return await Pokemon.findByPk(id,{
        include:[
          { 
          model:Types,
            attributes:["name"],
             through:{
              attributes:[],
        }
      } ]
   })
    }
  } catch (error) {
    return ({error:"No se puedo encontrar por ID"})
   }
}

const createPokemon = async (name, image, life, attack, defense, speed, height, weight, types,fromBDD) => {

  try {
     if (!name || !image || !life || !attack || !defense) throw new Error("Faltan datos obligatorios");
    
     const existingDbPokemon = await Pokemon.findOne({
       where: { name: name },
     });
     if (existingDbPokemon) {
       throw new Error("Ya existe un Pokémon con ese nombre en la base de datos");
     } 
     const existingApiPokemon = await getPokemonByName(name);
     if (existingApiPokemon.length > 0) {
       throw new Error("Ya existe un Pokémon con ese nombre en la API");
     }
 
    const newPokemon = await Pokemon.create({
      name,
      attack,
      defense,
      life,
      image,
      speed,
      height,
      weight,
      types,
      fromBDD:true
     
    })
   
    const pokemonTypes = await Types.findAll({
      where: { name: types },
    })
    newPokemon.addTypes(pokemonTypes)
    return newPokemon
  }
  catch (error) {
    return ({error:error.message})
   }
}

const getPokemonByName = async (name) => {
  const databasePokemon = await Pokemon.findAll(
    { where: { name: name },
    include:[
      { 
      model:Types,
      attributes:["name"],
         through:{
         attributes:[],
    } } ] 
  })
  
  const apiPokemon = await getPokeByApi()
  const filtered = apiPokemon.filter((poke) => poke.name === name)
  return [...databasePokemon, ...filtered]
}

const deletePokemonById = async (id)=>{
 
  const pokemones= await Pokemon.destroy(
    {where:{id:id},
    include:[
      { 
      model:Types,
      attributes:["name"],
         through:{
         attributes:[],
    } } ] }
  )
  if(pokemones ===1){
    return id
  }
  else{
    return "No se encontro el id"
  }
 
  
}
module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
  createPokemon,
  deletePokemonById
}