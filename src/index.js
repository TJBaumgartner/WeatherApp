import {createForecast} from "./forecastUI";
import './style.css';
import { switchDegree } from "./forecastUI";

const search = document.getElementById('searchBar');
const submitSearch = document.getElementById('searchSubmit');
const celButton = document.getElementById('cel');
const farButton = document.getElementById('far');

searchWeather('Germany');
submitSearch.addEventListener('click', searchWeather);
celButton.addEventListener('click', switchDegree);
farButton.addEventListener('click', switchDegree);

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