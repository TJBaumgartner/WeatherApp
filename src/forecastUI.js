function createForecast(data) {
    let forecast = {
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        humidity: data.current.humidity,
        wind: data.current.wind_mph,
        conditionText: data.current.condition.text,
        conditionIcon: data.current.condition.icon,
        location: data.location.name,
        country: data.location.country
    }
    displayForecast(forecast);
    return forecast;
}
function displayForecast(forecastData){
    const country = document.getElementById('country');
    const icon = document.getElementById('icon');
    const temp = document.getElementById('temp');
    //const cel = document.getElementById('cel');
    //const far = document.getElementById('far');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const condition = document.getElementById('condition');

    country.textContent = forecastData.country;
    icon.src = forecastData.conditionIcon;
    temp.textContent = forecastData.tempF;
    humidity.textContent = forecastData.humidity;
    wind.textContent = forecastData.wind;
    condition.textContent = forecastData.conditionText;
}
export{
    createForecast,
}