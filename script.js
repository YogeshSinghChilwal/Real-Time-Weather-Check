const weatherApi = "https://api.openweathermap.org/data/2.5/weather?appid=cdc2017374032358588953a1b4c3c804&units=metric&q="

const weatherImage = document.querySelector(".weather-img");
const cityName = document.querySelector(".search-box");
const btn = document.querySelector(".btn");
const weatherDetails = document.querySelector(".weather-details");
const error = document.querySelector(".error-msg");

async function getWeather(city){
    const responce = await fetch(weatherApi + city);
    
    if(responce.status == 404){
        error.style.display = "block";
        weatherDetails.style.display = "none";
    } else{
        weatherDetails.style.display = "block";
        error.style.display = "none";
    }
    var data = await responce.json();
    

    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
    document.querySelector(".feelsLike-temp").innerText = "Feels like " + Math.round(data.main.feels_like) + "°c";
    document.querySelector(".city-name").innerText = data.name;
    document.querySelector(".city-description").innerText = data.weather[0].description;
    document.querySelector(".humidity-val").innerText = data.main.humidity + "%";
    document.querySelector(".wind-val").innerText = data.wind.speed + " km/hr";

    let dataImage = data.weather[0].main.toLowerCase();
    weatherImage.src = `./images/${dataImage}.png`;
}
 
btn.addEventListener("click", ()=>{
    getWeather(cityName.value);
})
