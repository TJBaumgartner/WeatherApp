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
    const tempC = document.getElementById('tempC');
    const tempF = document.getElementById('tempF');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const condition = document.getElementById('condition');

    tempC.textContent = forecastData.tempC;
    tempF.textContent = forecastData.tempF;
    country.textContent = forecastData.location;
    icon.src = forecastData.conditionIcon;
    temp.textContent = forecastData.tempF;
    temp.value = forecastData.tempC;
    humidity.textContent = 'Humidity: ' + forecastData.humidity;
    wind.textContent = 'Wind: ' + forecastData.wind;
    condition.textContent = forecastData.conditionText;
}
function switchDegree(){
    const far = document.getElementById('far');
    const cel = document.getElementById('cel');
    const temp = document.getElementById('temp');
    const tempC = document.getElementById('tempC');
    const tempF = document.getElementById('tempF');
    if(far.classList.contains('active')){
        temp.textContent = tempC.textContent;
        far.classList.remove('active');
        cel.classList.add('active');
        return;
    }
    if(cel.classList.contains('active')){
        temp.textContent = tempF.textContent;
        cel.classList.remove('active');
        far.classList.add('active');
        return;
    }
}
export{
    createForecast,
    switchDegree
}