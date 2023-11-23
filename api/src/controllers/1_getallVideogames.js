const { Videogames, Genres } = require("../db");
const { YOUR_API_KEY } = process.env;
const axios = require("axios");

const URL2 = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;

const getAllVideogames = async() => {
    
    const response = await axios.get(URL2);
    const data = response.data.results;

    const videogames = data.map((game) => ({
    
        name: game.name,
        description: game.slug,
        plataformas: game.platforms.map((platform) => ({ name: platform.platform.name })),
        imagen: game.background_image,
        fecha: game.released,
        rating: game.rating,
        genres: game.genres.map((genre) => ({ name: genre.name })),


    }));

    return videogames;
    
}
module.exports = getAllVideogames;