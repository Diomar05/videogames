const cleanVideogame = (videogame) => {
    return {
        id: videogame.id,
        name: videogame.name,
        descripcion: videogame.slug,
        plataformas: videogame.platforms.map((platform) => platform.platform.name),
        imagen: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map((genre) => genre.name),
    };
}

module.exports = cleanVideogame;