const { Videogames, Genres } = require("../db");
const { YOUR_API_KEY } = process.env;
const axios = require("axios");

const URL = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;

const getAllVideogames = async() => {
    
    const data = (await axios.get(URL)).data.results;

    const videogames = data.map((game) => ({

        name: game.name,
        descripcion: game.slug,
        plataformas: game.platforms.map((platform) => ({ name: platform.platform.name })),
        imagen: game.background_image,
        released: game.released,
        rating: game.rating,
        genres: game.genres.map((genre) => ({ name: genre.name })),

    }));

    const videogamesDB = await Videogames.findAll({
        include: {
            model: Genres,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });

  


    return [...videogamesDB, ...videogames];
    
}
module.exports = getAllVideogames;