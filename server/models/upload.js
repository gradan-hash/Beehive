const mongoose = require('mongoose')

const uploadschema = new mongoose.Schema({

    name:{

        type:String,
        required:[true, 'please provide the name of the hive']
    },

    price:{

        type:Number,
        required:[true, 'please provide the price for the hive']
    },

    size:{

        type:String,
        required:[true, 'please provide the size of the hive']
    },

    image:{

        type:String,
        required:[true, 'please provide the image of the hive']
    }




}, {timestamps:true})


module.exports = mongoose.model('upload', uploadschema )