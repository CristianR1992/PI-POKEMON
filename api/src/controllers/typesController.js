const axios = require("axios");
const { Types } = require("../db.js");

const getApiType = async () => {
  try {
    let array= []
    await axios
    .get("https://pokeapi.co/api/v2/type")
    .then ((response) =>
     response.data.results.map((type) => array.push ({ name: type.name })))

    const allTypes = await Types.findAll();
    if (allTypes.length === 0) {
      await Types.bulkCreate(array);
    }
return "Types en base de datos"
  } catch (error) {};
}
module.exports = {
  getApiType,
};
