const {Router} = require('express')
const { getApiTypeHandler } = require('../handler/typesHandler');

const router = Router()


router.get("/", getApiTypeHandler)


module.exports= router;