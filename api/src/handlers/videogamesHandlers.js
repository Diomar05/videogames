const getAllVideogames = require('../controllers/1_getallVideogames')
const getIdVideogames = require('../controllers/2_idVideogames');
const getNameVideogames = require('../controllers/3_nameVideogames');
const getAddVideogames = require('../controllers/4_addVideogames');

exports.allVideogames = async (req, res) => {
    try {
        const response = await getAllVideogames()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

exports.nameVideogames = (req, res) => {
    const { name } = req.query;
    try {
        const videogameName = name ? getNameVideogames(name) : getAllVideogames();
        res.status(200).json(videogameName);
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
    const { name, description, plataformas, imagen, fecha, rating } = req.body
    try {
        const response = await getAddVideogames(name, description, plataformas, imagen, fecha, rating)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};