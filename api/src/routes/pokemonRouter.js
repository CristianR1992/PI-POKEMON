const {Router} = require('express');

const {getPokemonByNameHandler, getPokemonByIdHandler, getAllPokemonsHandler, createPokemonHandler} = require ('../handler/pokemonHandler')
const router = Router();

router.post("/", createPokemonHandler)

router.get("/name",getPokemonByNameHandler )

router.get("/", getAllPokemonsHandler)

router.get("/:id",getPokemonByIdHandler)




module.exports= router;