const express = require('express')
const app = express()
const port = process.env.PORT || 3003
require('dotenv').config()
const connectDB = require('./connection/connection.js')
const registerlogin = require('./routes/regLogin.js')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const ratelimit = require('express-rate-limit')



app.set('trust proxy', 1)
app.use(ratelimit({
    windowMs: 15 * 60 * 1000,
    max:100
}))


app.use(xss())
app.use(cors())
app.use(helmet())
app.use(express.json())


app.use('/api/auth', registerlogin)


const connect = async()=>{

    try{

        await connectDB(process.env.mongo_url)
        app.listen(port, ()=>{
            console.log(`server is running at port ${port}`)
        })

    }

    catch(error){

        console.log(error)
    }


}


connect()


