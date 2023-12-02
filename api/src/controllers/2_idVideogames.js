const { Videogames, Genres } = require("../db");
const { YOUR_API_KEY } = process.env;
const axios = require("axios");
const clean = require("../utils/cleanVideogame");

const getIdVideogames = async(id, source) => {

    // Creo una condicional para obtener el ID de la API
     if (source === "api") {
         const apiVideogame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`);
         const videogame = clean(apiVideogame.data);
         return videogame;
         } else {

        // en caso de no encontrar el ID en la api busco los datos en la BDD
         const dbVideogame = await Videogames.findByPk(id, { include: Genres });
         return dbVideogame;
     }    
}
module.exports = getIdVideogames;