const uploads = require('../models/upload')
const {StatusCodes} = require('http-status-codes')


const createupload = async(req, res)=>{

    try{
        
        // const {name, price, size, image} = req.body

        const newhive =  await uploads.create({...req.body})

        res.status(StatusCodes.CREATED).json({newhive})

    }

    catch(error){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

    }


}


const getalluploads = async(req, res)=>{

    try{


        const getallhives = await uploads.find({}).select('name size price image').sort('createdAt')

        res.status(StatusCodes.OK).json({getallhives})
    }

    catch(error){

        res.status().json({error})

    }


}



const getsingleupload = async(req, res)=>{

    try{

        const {id:hiveId} = req.params

        const getsinglehive = await uploads.findOne({_id:hiveId})

        if(!getsinglehive){

            res.status(StatusCodes.NOT_FOUND).json({msg:`Item with the id:${hiveId} cannot be found`})
        }

        res.status(StatusCodes.OK).json({getsinglehive})

    }

    catch(error){

        res.status().json({error})

    }

}

const updateupload = async(req, res)=>{

    try{

        const {id:hiveId} = req.params

        const updatehive = await uploads.findOneAndUpdate({_id:hiveId}, req.body,{

            new:true,
            runValidators:true
        })

        if(!updatehive){
            res.status(StatusCodes.NOT_FOUND).json({msg:`Hive with id:${hiveId} cannot be found`})
        }

        res.status(StatusCodes.OK).json({updatehive})



    }

    catch(error){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

    }

}



const deleteupload = async(req, res)=>{

    try{

        const {id:hiveId} = req.params

        const deletehive =  await uploads.findOneAndDelete({_id:hiveId})

        if(!deletehive){

            res.status(StatusCodes.NOT_FOUND).json({msg:`hive with the id:${hiveId} cannot be found`})
        }

        res.status(StatusCodes.OK).json({deletehive})

    }

    catch(error){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})


    }

}



module.exports = {createupload,getalluploads, getsingleupload, deleteupload, updateupload }

