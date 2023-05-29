const {Router} = require('express')
const {registerHandler, loginHandler } = require('../handler/userHandler');

const router = Router()


router.post("/", loginHandler)

router.post("/register", registerHandler)


module.exports= router;