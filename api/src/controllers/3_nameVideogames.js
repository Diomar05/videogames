const { Videogames, Genres } = require("../db");
const { YOUR_API_KEY } = process.env;
const axios = require("axios");
const clean = require('../utils/cleanVideogame')

const getNameVideogames = async (name) => {

    // !Realizo Consulta api
 const videogamesApi = await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}&search=${name}`);

 // !Realizo consulta base de Datos Local
    const videogamesDB = await Videogames.findAll({
        where: {
            name: name
        },
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    // !Uno los resultados de ambas consultas
    const videogames = videogamesApi.data.results.concat(videogamesDB)
    // !Limpio los resultados
    const videogamesClean = videogames.map((videogame) => clean(videogame))
    // !Retorno los resultados
    return (videogamesClean.slice(0, 15)) ;
}   

module.exports = getNameVideogames;
