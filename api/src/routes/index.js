const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// ! Importo Rutas para Videogames y Genres
const videogames = require('./videogamesRouter');
const videogamesname = require('./videogamesNameRouter');
const genres = require('./genresRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ! Creo Rutas para Videogames y Genres
router.use('/videogames', videogames);
router.use('/videogamesname', videogamesname);
router.use('/genres', genres);

module.exports = router;
