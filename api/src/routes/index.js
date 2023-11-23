const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// ! Importo Rutas para Videogames y Genres
const videogames = require('./videogamesRouter');
const genres = require('./GenresRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ! Creo Rutas para Videogames y Genres
router.use('/videogames', videogames);
router.use('/genres', genres);


module.exports = router;
