const express = require('express')
const router = express.Router()
const { createEstimatePlan,checkAvailabilityPlan }  = require('../../services/EstimationService')

// @type                       POST
// @route                     api/estimate/calculate
// @description           This route is for estimating investment and turnover
// @access                  PRIVATE

router.post('/calculate/',async  (req,res) =>{
     await createEstimatePlan(req,res)
})

// @type                       GET
// @route                     api/estimate/find
// @description           This route is for estimating investment and turnover based on existing data
// @access                  PRIVATE

router.get('/find/:crop/:acres',async (req,res) => {
     await checkAvailabilityPlan(req,res)
})



module.exports = router