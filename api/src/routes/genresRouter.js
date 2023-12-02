const { Router } = require('express');
const genres = require("../handlers/genresHandlers");

genresRouter = Router();

// ! Ruta para obtener todos los generos
genresRouter.get("/", genres.allGenres);


module.exports = genresRouter;