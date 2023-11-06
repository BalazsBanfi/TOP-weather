import { api } from "./env.js";
const search = document.getElementById('search')

const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const render = (data) => {
    console.log(data);
    city.innerHTML = `${data.location.name}, ${data.location.country}`;
    temp.innerHTML = `Temperature: ${data.current.temp_c} Celsius`;
    feels.innerHTML = `Feels like ${data.current.feelslike_c} Celsius`;
    humidity.innerHTML = `Humidity: ${data.current.humidity} %`;
    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
}

async function getCity(loc) {
    fetch(`${api.url}current.json?key=${api.key}&q=${loc}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            render(response);
        });
}



search.addEventListener('keypress', (e) => {
    console.log(e)
    console.log(search.innerHTML)
    
    if (e.key == 'Enter') {
        e.preventDefault;
        getCity(search.innerHTML)
    }
})

getCity('London');