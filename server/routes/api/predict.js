const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const processData = require('../../helper/predict-helper').processData

// @type                            GET
// @route                          api/predict/details
// @description               This route provides the details about effective 
//                                        dates to inject fertilizers in land based on weather
// @access                      PRIVATE

router.get('/details',(req,res) => {
           fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/206673?apikey=DJAJqGEEBIHGYFt4G93DAnlwtFmyFWJL')
                    .then(res => res.json())
                    .then(json => processData(json)) 
                    .then(data => data.length != 0?res.status(200).json(data) 
                    : res.status(404).json({unavailableUpdate :"Data not available"}))
                    .catch(err => console.log("error occured while predicting wether details "+err))
})


module.exports = router