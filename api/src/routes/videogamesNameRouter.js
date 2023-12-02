const Router = require('express')

// !Importar todos los handlers
const videogames = require('../handlers/videogamesNameHandlers')

videogamesRouter = Router();

// !Ruta para buscar un videojuego por nombre
videogamesRouter.get("/", videogames.nameVideogames);

module.exports = videogamesRouter;