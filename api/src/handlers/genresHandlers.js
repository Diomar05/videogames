const { getAllGenres } = require('../controllers/5_getAllGenres');

exports.allGenres = async(req, res) => {
    try {
        const response = await getAllGenres()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
