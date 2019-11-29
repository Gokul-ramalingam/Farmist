const express = require('express')
const router = express.Router()
const createEstimatePlan = require('../../services/EstimationService').createEstimatePlan

// @type                       POST
// @route                     api/estimate/calculate
// @description           This route is for estimating investment and turnover
// @access                  PRIVATE

router.post('/calculate',(req,res) => {
     createEstimatePlan(req.body)
})



module.exports = router