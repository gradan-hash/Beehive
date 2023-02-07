const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const reglogSchema = new mongoose.Schema({

    name:{

        type:String,
        required:[true, 'Please provide the name.'],
        minlength:8,
        maxlength:30

    },

    email:{

        type:String,
        required:[true, 'Please provide the email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email',
            
            ], 

        unique:true
    },

    password:{

        type:String,
        require:[true, 'Please provide a password'],
        minlength:6

    }



}, {timestamps:true})

reglogSchema.pre('save', async function(){

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})

reglogSchema.methods.jwttoken = function(){


    return(jwt.sign({userId:this._id, name:this.name}, process.env.jwt_secret, {expiresIn:process.env.jwt_expires}))

}

reglogSchema.methods.comparepwd = async function(candidatepassword){

    const ismatch = bcrypt.compare(candidatepassword, this.password)

    return ismatch


}



module.exports = mongoose.model('regLog', reglogSchema)