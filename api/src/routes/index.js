const { Router } = require('express');

const pokemonRouter = require('./pokemonRouter.js')
const typesRouter = require ('./typesRouter.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/types", typesRouter)
router.use("/pokemon", pokemonRouter)



module.exports = router;
