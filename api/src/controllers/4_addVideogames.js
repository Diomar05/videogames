const { Videogames, Genres } = require("../db");

const getAddVideogames = async (videogameData) => {
  // Obtengo los datos necesarios para crear el videojuego
  const { name, descripcion, plataformas, imagen, released, rating, genres } =
    videogameData;

  // Valido de que los datos que necesito esten
  if (
    !name ||
    !descripcion ||
    !plataformas ||
    !imagen ||
    !released ||
    !rating ||
    !genres
  ) {
    return Error("Faltan datos");
  }

  //Verificar que el videojuego no exista
  const existingVideogame = await Videogames.findOne({ where: { name: name } });
  if (existingVideogame) {
    return "El videojuego ya existe";
  } else {
    // Si el videojuego no existe, lo creo
    const newVideogame = await Videogames.create({
      name,
      descripcion,
      plataformas,
      imagen,
      released,
      rating,
      genres,
    });

    // Agrego los generos al videojuego
    const genresFound = await Genres.findAll({
      where: { name: genres },
    });

    await newVideogame.addGenres(genresFound);
    console.log(newVideogame);
    return newVideogame;
  }
};

module.exports = getAddVideogames;
