const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 7000

//MongoDB Configuration
const db = require('./config/connection').url

//Middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())

//Mongoose Connection
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
                    .then(() => {
                        console.log('Connected to MongoDB successfully...')
                    })
                    .catch(err => console.log('Error occured while try to establish connection with MongoDB '+err))

//Main route
app.get('/',(req,res)=>{
    res.send('Server is up and running')
})

//Listening to port
app.listen(port,() => {
    console.log(`App is running at port ${port}`)
})