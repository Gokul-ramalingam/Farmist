const processData = (json) => {
    const { DailyForecasts } = json
    DailyForecasts.map(val=> {
        const { Day } = val;
        console.log(Day.PrecipitationType);
    })
    // console.log(DailyForecasts)
    return DailyForecasts
}

module.exports = { processData }