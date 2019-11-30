const Estimation = require('../models/Estimation')
const { generateEstimate,calculateForAcres } = require('../helper/estimate-helper');


const createEstimatePlan = (req,res) => {
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
                                      .then(data => {
                                           Estimation.find({crop:data.crop})
                                                              .then((crop) => generateEstimate(crop))
                                                              .then(plan => res.status(200).json(plan))
                                                              .catch(err => console.log('Error finding plans '+err))
                                          })
                                        .catch(err => console.log('error occured while trying to insert estimation plan details'))
}


const checkAvailabilityPlan = (req,res) => {
         Estimation.find({crop:req.params.crop})
                             .then(crop => generateEstimate(crop))
                             .then(data => calculateForAcres(data,req.params.acres))
                             .then(plan => res.status(200).json(plan))
                             .catch(err => console.log("Errror finding crops "+err));
}




module.exports = { createEstimatePlan,checkAvailabilityPlan }