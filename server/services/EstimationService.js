const Estimation = require('../models/Estimation')
const generateEstimate = require('../helper/estimate-helper').generateEstimate;


const createEstimatePlan = (req) => {
      let newPlan = {
          crop : req.crop,
          currentprice : req.currentprice,
          activities : [
              {
                  machinary : req.machinary,
                  worker : req.worker,
                  fertilizers : req.fertilizers
              },
              {
                  machinary : (3/4)*req.machinary,
                  worker : (3/4)*req.worker,
                  fertilizers : (3/4)*req.fertilizers
              },
               {
                  machinary : (1/2)*req.machinary,
                  worker : (1/2)*req.worker,
                  fertilizers : (1/2)*req.fertilizers
              }
          ],
          city : req.city
      }
    let estimationInstance = new Estimation(newPlan)
    estimationInstance.save()
                                      .then(data => generateEstimate(data))
                                      .catch(err => console.log('error occured while trying to insert estimation plan details'))
}


module.exports = { createEstimatePlan }