function createForecast(data) {
    let forecast = {
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        humidity: data.current.humidity,
        wind: data.current.wind_mhp,
        conditionText: data.current.condition.text,
        conditionIcon: data.current.condition.icon,
        location: data.location.name,
        country: data.location.country
    }
    return {forecast}
}
export{
    createForecast
}