// http://api.openweathermap.org/data/2.5/weather?q=Portland&appid=35685f3a84c72419b2f5139809d4bb94

let weather = {
    "apiKey": "35685f3a84c72419b2f5139809d4bb94",
    fetchWeather: function(city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
         + city
         + "&units=metric&appid="
         + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather In " + name;
        document.querySelector(".weather-icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"
        document.querySelector(".desc").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind speed: " + speed + " km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/2000x1000/?" + name + "'"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".searched").value)
    }
};

document.querySelector(".search button").addEventListener('click', function () {
    weather.search();
})

document.querySelector(".searched").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})