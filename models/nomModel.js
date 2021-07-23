const mongoose = require('mongoose')

const nomSchema = mongoose.Schema({
    
  
    nomcomplet: String,
    n: Number
    
     
}
)

module.exports = mongoose.model('Noms', nomSchema);
