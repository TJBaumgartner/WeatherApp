const search = document.getElementById('searchBar');
const submitSearch = document.getElementById('searchSubmit');
import {createForecast} from "../forecastUI";

submitSearch.addEventListener('click', searchWeather);

function searchWeather() {
    let userInput = search.value;
    if(userInput == ''){
        userInput = 'Germany'
    }
    fetchData(userInput);
}
async function fetchData(input) {   
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8c5a10dd57674d3aac1211332231305&q=${input}&days=7&aqi=no&alerts=no
        `, {mode: 'cors'})
        const responseData = await response.json();
        console.log(createForecast(responseData));
    } catch(err){
        alert(`You got an error: Location ${input} could not be found.`);
    }
}