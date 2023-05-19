function createForecast(data) {
    let forecast = {
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        humidity: data.current.humidity,
        wind: data.current.wind_mph,
        conditionText: data.current.condition.text,
        conditionIcon: '',
        location: data.location.name,
        country: data.location.country
    }
    displayForecast(forecast);
    return forecast;
}
function displayForecast(forecastData){
    const country = document.getElementById('country');
    //const icon = document.getElementById('icon');
    const temp = document.getElementById('temp');
    const tempC = document.getElementById('tempC');
    const tempF = document.getElementById('tempF');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const condition = document.getElementById('condition');

    tempC.textContent = forecastData.tempC;
    tempF.textContent = forecastData.tempF;
    country.textContent = forecastData.location;
    //icon.src = forecastData.conditionIcon;
    temp.textContent = forecastData.tempF;
    temp.value = forecastData.tempC;
    humidity.textContent = 'Humidity: ' + forecastData.humidity;
    wind.textContent = 'Wind: ' + forecastData.wind;
    condition.textContent = forecastData.conditionText;
    displayImage();
}
function displayImage(){
    let image = document.getElementById('condition');
    const imagesrc = document.getElementById('icon');
    if(image.textContent == 'Partly cloudy'){
        imagesrc.src = 'https://www.clipartmax.com/middle/m2i8A0b1H7Z5b1N4_rain-cloud-icon-partly-cloudy-weather-icon/';
    }
    if(image.textContent == 'Clear'){
        imagesrc.src = 'https://www.clipartmax.com/middle/m2H7d3d3A0b1G6N4_sun-clipart-clipart-florida-clear-sky-icon-png/';
    }
    if(image.textContent == 'Sunny'){
        imagesrc.src = 'https://www.clipartmax.com/middle/m2H7d3d3A0b1G6N4_sun-clipart-clipart-florida-clear-sky-icon-png/';
    }
    if(image.textContent == 'Cloudy'){
        imagesrc.src = 'https://www.clipartmax.com/middle/m2i8K9i8b1m2N4H7_cloud-clip-art-cloudy-forecast/';
    }
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