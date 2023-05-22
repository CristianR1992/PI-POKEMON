const { getAllPokemons, getPokemonById, getPokemonByName, createPokemon, deletePokemonById} = require('../controllers/pokemonController');
//NO TIENE QUE INTERACTUAR CON EL MODELO !!!! PARA ESO ESTA EL CONTROLLER

const getPokemonByNameHandler = async (req, res) => {
       const {name} = req.query;
     try {
       const result = name ? await getPokemonByName(name.toLowerCase()): await getAllPokemons()
      res.status(200).json(result)
 } catch (error) {
      res.status(400).json({error:error.message});
    }
  }

const getPokemonByIdHandler =  async (req,res)=>{
      const {id} = req.params
      const source = isNaN(id) ? "bdd" : "api"
    try {
      const pokemon = await getPokemonById (id,source);
      res.status(200).json(pokemon)

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getAllPokemonsHandler = async (req, res)=>{
    try {
        const pokemons = await getAllPokemons()
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).send("Error al traer los Pokemons")
         }
}

const createPokemonHandler= async(req,res)=>{
    const{name,image,life,attack,defense,speed,height,weight,types,fromBDD} = req.body
    
try {
  const newPokemon = await createPokemon(name.toLowerCase(),image,life,attack,defense,speed,height,weight,types,fromBDD);
  res.status(200).json(newPokemon);
} catch (error) {
    res.status(400).json({error:error.message})
}
}

const deletePokemonByIdHandler = async(req,res)=>{
  try {
    const {id}= req.params
  const filtered = await deletePokemonById(id)
  res.status(200).json(filtered)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}



  module.exports ={
    getPokemonByNameHandler,
    getPokemonByIdHandler,
    getAllPokemonsHandler,
    createPokemonHandler,
    deletePokemonByIdHandler
  }

