const processData = (json) => {
    const { DailyForecasts } = json
   const data =  DailyForecasts.map(forecast=> {
        const { Date,Day } = forecast;
        if(Day.PrecipitationType != 'Rain' && Day.PrecipitationType != 'Thunderstorms')
               return Date.substr(0,10)
    }).filter(dates => dates != undefined)
    return data
}

module.exports = { processData }