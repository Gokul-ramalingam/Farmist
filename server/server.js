const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 7000

//routes
const estimate = require('./routes/api/estimate')
const predict = require('./routes/api/predict')
const availability = require('./routes/api/availability')
const stock = require('./routes/api/stock')

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

app.get('/',(req,res)=>{
    res.send('Server is up and running')
})

//Main route
app.use('/api/estimate',estimate)
app.use('/api/predict',predict)
app.use('/api/availability',availability)
app.use('/api/stock',stock)

//Listening to port
app.listen(port,() => {
    console.log(`App is running at port ${port}`)
})