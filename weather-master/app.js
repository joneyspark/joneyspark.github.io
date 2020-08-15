console.log("Weather App");

let searchValue = document.getElementById('searchValue');
const searchBtn = document.getElementById('searchBtn');
let icon = document.getElementById('icon');
let city = document.getElementById('city');
let celcius = document.getElementById('celcius');
let weatherDesc = document.getElementById('weather');
let notificationElement = document.getElementById('notification');

searchBtn.addEventListener('click', () => {
    const searchValueOutput = searchValue.value;
    getWeather(searchValueOutput);
})

//App consts and vars

const KELVIN = 273;

//API KEY

const key = "8c9fdc61084c1e5a87a6a0a69a692482";


function getWeather(city){

    if(searchValue.value.length != 0){
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        fetch(api)
        .then(res => res.json())
        .then(data => {
            let description = data.weather[0].description;
            let iconId = data.weather[0].icon;
            let cityName = data.name;
            let temparture = Math.floor(data.main.temp - KELVIN);
            return displayWeather(description, iconId, cityName, temparture);
        })
    }
    

}

const weather = {

}

weather.temperature = {
    unit: "celsius"
}

// check if browser support geolocation
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Does not supported.</p>"
}

function showError(){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p`;
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeatherDefault(latitude, longitude);
}

function getWeatherDefault(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    fetch(api)
    .then(res => res.json())
    .then(data => {
        let description = data.weather[0].description;
        let iconId = data.weather[0].icon;
        let cityName = data.name;
        temparture = Math.floor(data.main.temp - KELVIN);
        return displayWeather(description, iconId, cityName, temparture);

    })
}


function displayWeather(description, iconId, cityName, temparture){
    icon.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    city.innerHTML = cityName;
    weatherDesc.innerHTML = description;
    celcius.innerHTML = `<span>${temparture}</span>&deg;C`;
    celsiusToFahrenheit(temparture);
    
}

function celsiusToFahrenheit(temparture){
    return (temparture * 9/5) + 32;
}

// celcius to fahrenheit

celcius.addEventListener("click", function(){

    if(temparture === undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(temparture)
        fahrenheit = Math.floor(fahrenheit);

        celcius.innerHTML = `<span>${fahrenheit}</span>&deg;F`;
        weather.temperature.unit = "fahrenheit"
    }else{
        celcius.innerHTML = `<span>${temparture}</span>&deg;C`;
        weather.temperature.unit = "celsius"
    }
})