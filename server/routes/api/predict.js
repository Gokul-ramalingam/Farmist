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
           fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/206673?apikey=mvopadCYu7LfaZ3Aa6wjmIApvUmWNXN0')
                    .then(res => res.json())
                    .then(json => processData(json)) 
                    .then(data => res.json(data))
})


module.exports = router