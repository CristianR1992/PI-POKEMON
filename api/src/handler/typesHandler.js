const { getApiType } = require("../controllers/typesController")

const getApiTypeHandler= async (req,res)=>{
    try {
        const types = await getApiType()
        res.status(200).json(types)
    } catch (error) {
        res.status(500).send("Error al traer los Types")
        
    }
}

module.exports={
    getApiTypeHandler
}
//NO TIENE QUE INTERACTUAR CON EL MODELO !!!! PARA ESO ESTA EL CONTROLLER