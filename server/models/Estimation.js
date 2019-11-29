const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const estimationSchema = newSchema({
    crop : {
    type : String,
    required : true
    },
    currentprice : {
        type : Number,
        required : true
    },
    duration : {
        type : Number,
        default : 30
    },
    activities : [Object],
    city : {
        type : String,
        required : true
    }
    date : {
        type : Date,
        default : Date.now()
    }
})

module.exports = Estimation = mongoose.model('estimations',estimationSchema)