const regLogin = require('../models/register-login')
const {StatusCodes} = require('http-status-codes')


const register = async(req, res)=>{


    try{


        const newuser = await regLogin.create({...req.body})

        const token = newuser.jwttoken()

        res.status(StatusCodes.CREATED).json({name:newuser.name, token})
    }

    catch(error){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})


    }


}


const login = async(req, res)=>{


    try{

        const {email, password} = req.body

        if(!email || !password){

            res.status(StatusCodes.UNAUTHORIZED).json({msg:'Please provide full credentials'})
        }

        const user =  await regLogin.findOne({email})

        if(!user){

            res.status(StatusCodes.UNAUTHORIZED).json({msg:'Provide the correct email'})
        }

        const correctpassword = await user.comparepwd(password)

        if(!correctpassword){

            res.status(StatusCodes.UNAUTHORIZED).json({msg:'Provide the correct password'})
        }

        const token = user.jwttoken()

        res.status(StatusCodes.OK).json({name:user.name, token})

    }

    catch(error){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
}







module.exports ={register, login}