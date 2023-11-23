const { Router } = require('express');
const genres = require("../handlers/genresHandlers");

genresRouter = Router();

genresRouter.get("/", genres.allGenres);


module.exports = genresRouter;