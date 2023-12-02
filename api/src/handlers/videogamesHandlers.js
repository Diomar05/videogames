const getAllVideogames = require('../controllers/1_getallVideogames')
const getIdVideogames = require('../controllers/2_idVideogames');
const getAddVideogames = require('../controllers/4_addVideogames');

exports.allVideogames = async (req, res) => {
    try {
        const response = await getAllVideogames()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.idVideogames = async (req, res) => {

    const { id } = req.params;

    const source = isNaN(id) ? "bdd" : "api";
    try {
        const response = await getIdVideogames(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.addVideogames = async (req, res) => {
    const { name, descripcion, plataformas, imagen, released, rating, genres } = req.body;  
    const videogameData = { name, descripcion, plataformas, imagen, released, rating, genres };

    try {
        const response = await getAddVideogames(videogameData)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }    
};