const Router = require('express')

// !Importar todos los handlers
const videogames = require('../handlers/videogamesHandlers')

videogamesRouter = Router();

// !Ruta para buscar todos los videojuegos
videogamesRouter.get("/", videogames.allVideogames);

// !Ruta para buscar un videojuego por id
videogamesRouter.get("/:id", videogames.idVideogames);

// !Ruta para agregar un videojuego
videogamesRouter.post("/", videogames.addVideogames);

module.exports = videogamesRouter;