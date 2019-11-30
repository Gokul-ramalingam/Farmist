const express = require('express')
const router = express.Router()
const createEstimatePlan = require('../../services/EstimationService').createEstimatePlan

// @type                       POST
// @route                     api/estimate/calculate
// @description           This route is for estimating investment and turnover
// @access                  PRIVATE

router.post('/calculate',async  (req,res) =>{
     await createEstimatePlan(req.body,res)
})



module.exports = router