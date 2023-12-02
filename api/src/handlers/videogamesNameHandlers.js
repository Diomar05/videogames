const getNameVideogames = require('../controllers/3_nameVideogames');

exports.nameVideogames = async (req, res) => {
    const { name } = req.query;
    try {
        
        const videogameName = await getNameVideogames(name);
        res.status(200).json(videogameName);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
