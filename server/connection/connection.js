const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const connection = (url)=>{

    return mongoose.connect(url)
}


module.exports = connection