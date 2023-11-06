import { api } from "./env.js";

console.log(api);
const city = "London"

//const img = document.querySelector('img');
fetch(`${api.url}current.json?key=${api.key}&q=${city}`, { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
    });