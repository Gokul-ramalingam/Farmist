const findData = require('../services/EstimationService').findData

const generateEstimate = (data,cropArray) => {
   const { crop,currentprice,city,duration,activities } = data
   let datas = []; 

   cropArray.forEach(crop =>{
       crop.activities.reduce((a,b) => {
            a.machinary + b.machinary   
       },0)
   })
    //  let val = cropArray.activities.reduce =>((a,b)=>{
    //         a.machinary + b.machinary
    //  },0)
     console.log(cropArray);
}

module.exports = { generateEstimate }