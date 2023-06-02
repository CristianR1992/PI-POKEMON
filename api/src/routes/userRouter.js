const {Router} = require('express')
const {registerHandler, loginHandler,validateTokenHandler } = require('../handler/userHandler');

const router = Router()


router.post("/login", loginHandler)

router.post("/register", registerHandler)

router.post("/validateToken",validateTokenHandler)


module.exports= router;