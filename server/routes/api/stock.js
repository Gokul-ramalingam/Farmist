const express = require('express')
const router = express.Router()

// @type                             GET
// @route                           api/stock/data
// @description                This route is for obtaining stock details
// @access                        PRIVATE

router.get('/data',(req,res)=>{
    res.json({stock:"success"})
})


module.exports = router