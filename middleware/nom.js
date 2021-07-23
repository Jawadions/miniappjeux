const NomModel = require('../models/nomModel')

const nom = async (req, res, next) => {
    const { nommcomplet } = req.body;
    
        const nomModel = new NomModel({ nommcomplet })
    
        try {
            await nomModel.save();


        if(course.id !== 1) 
            return res.status(500).json({msg: "fdfdf."})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = nom