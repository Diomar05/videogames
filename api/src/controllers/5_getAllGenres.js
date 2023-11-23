const { Genres } = require("../db");
const axios =require("axios");

const { YOUR_API_KEY } = process.env;

const URL = `https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`;

exports.getAllGenres = async() => {

    const count = await Genres.count();
    
if (count === 0) {
    const response = await axios.get(URL);
    const data = response.data.results;

    // Extraer solo los nombre de los Generos
    const uniqueGenres = data.map((genre) => ({ name: genre.name }));
    console.log(uniqueGenres);
    return Genres.bulkCreate(uniqueGenres)
    
} else {
    const genres = await Genres.findAll();
    console.log(genres);
    return genres;
    
}
}

