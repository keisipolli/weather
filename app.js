document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch( city ) {
    var key = "4c9f7b8ced99c03a5db8192a1fa6a1ac";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}")
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {
            // catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch("Tallinn");
}