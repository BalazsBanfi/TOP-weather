import { api } from "./env.js";
const search = document.getElementById('search')

const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const render = (data) => {
    city.innerHTML = `${data.location.name}, ${data.location.country}`;
    temp.innerHTML = `Temperature: ${data.current.temp_c} Celsius`;
    feels.innerHTML = `Feels like ${data.current.feelslike_c} Celsius`;
    humidity.innerHTML = `Humidity: ${data.current.humidity} %`;
    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
}

const weather = async (loc) => {
    try {
        const response = await fetch(`${api.url}current.json?key=${api.key}&q=${loc}`, { mode: 'cors' })
        const weatherData = await response.json();
        render(weatherData)
    } catch (error) {
        city.innerHTML = "City not found...";
        temp.innerHTML = `Temperature: ... Celsius`;
        feels.innerHTML = `Feels like ... Celsius`;
        humidity.innerHTML = `Humidity: ... %`;
        wind.innerHTML = `Wind: ... km/h`;
    };
}



search.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault;
        weather(search.value)
    }
})

weather('London');