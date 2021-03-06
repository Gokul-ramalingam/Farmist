const findData = require('../services/EstimationService').findData

const generateEstimate = (cropArray) => {
    const { crop,currentprice,city,duration,activities } = cropArray[0];
    let datas = []; 
    let averageForMachinary = reducer('machinary',cropArray) 
    let averageForWorker = reducer('worker',cropArray)
    let averageForFertilizer = reducer('fertilizers',cropArray)
    let totalInvestment = averageForFertilizer+averageForMachinary+averageForWorker;

     let plan = {
         crop,
         currentprice,
         city,
         duration,
         machinary : averageForMachinary,
         worker        : averageForWorker,
         fertilizer     : averageForFertilizer,
         total            : totalInvestment
     }

     return plan
}

const reducer = (type,cropArray) => {
let val = cropArray.map(crop =>crop.activities)
                                .reduce((a,b) => a +parseInt(b[0][type]),0)
    return Math.floor(val/cropArray.length)
}

const calculateForAcres = (data,acres) => {
    data.machinary = data.machinary * acres;
    data.worker = data.worker * acres;
    data.fertilizer = data.fertilizer * acres;
    data.total = data.total * acres;
    return data
}

module.exports = { generateEstimate,calculateForAcres }