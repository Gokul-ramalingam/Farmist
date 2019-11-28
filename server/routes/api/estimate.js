const express = require('express')
const router = express.Router()


// @type                       POST
// @route                     api/estimate/calculate
// @description           This route is for estimating investment and turnover
// @access                  PRIVATE

router.post('/calculate',(req,res) => {
     res.json({success:"success"})
})



module.exports = router