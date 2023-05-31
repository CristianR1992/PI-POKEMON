const {Router} = require('express')
const {registerHandler, loginHandler } = require('../handler/userHandler');

const router = Router()


router.post("/login", loginHandler)

router.post("/register", registerHandler)


module.exports= router;