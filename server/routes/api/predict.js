const express = require('express')
const router = express.Router()

// @type                            GET
// @route                          api/predict/details
// @description               This route provides the details about effective 
//                                        dates to inject fertilizers in land based on weather
// @access                      PRIVATE

router.get('/details',(req,res)=>{
    res.json({success : "success"})
})


