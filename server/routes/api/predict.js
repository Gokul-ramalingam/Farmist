const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

// @type                            GET
// @route                          api/predict/details
// @description               This route provides the details about effective 
//                                        dates to inject fertilizers in land based on weather
// @access                      PRIVATE

router.get('/details',(req,res) => {
    fetch('https://randomuser.me/api/')
              .then(res => res.json())
              .then(json => res.send(json))
              
})


module.exports = router