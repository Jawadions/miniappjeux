const NomsModel = require('../models/nomModel')



const nomCtrl = {
      
    getAllnoms : async (req, res) => { 
        try {
            const nomsModel = await NomsModel.find();
              
            res.status(200).json(nomsModel);
            
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
  

  
 
}





module.exports = nomCtrl