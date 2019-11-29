const express = require('express')
const router = express.Router()

// @type                       GET
// @route                     api/availability/check
// @description           This route is for obtaining the details 
//                                    about availability of particualr crop
// @access                  PRIVATE
router.get('/check',(req,res) => {
    res.json({availability : "success" })
})



module.exports = router