// all selectors

const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');

// App data

const weather = {

}

weather.temperatur = {
    unit : "celsius"
}

//App consts and vars

const KELVIN = 273;


//API KEY

const key = "8c9fdc61084c1e5a87a6a0a69a692482";

// check if browser support geolocation

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Does not supported.</p>"
}


// SET USER'S POSITION

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    //let api = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`;

    fetch(api)
    .then(response => response.json())
    .then(data => {
        weather.temperatur.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
        console.log(data);
    })
    .then(function(){
        displayWeather();
    });
}

// Display Weather

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png" />`;
    tempElement.innerHTML = `${weather.temperatur.value}°<span>C</span>`;
    descElement.innerHTML = `${weather.description}`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

//C to F

function celsiusToFahrenheit(temperatur){
    console.log(temperatur);
    return (temperatur * 9/5) + 32;

}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET

tempElement.addEventListener("click", function(){
    if(weather.temperatur.value === undefined) return;

    if(weather.temperatur.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperatur.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperatur.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperatur.value}°<span>C</span>`;
        weather.temperatur.unit = "celsius";
    }
});