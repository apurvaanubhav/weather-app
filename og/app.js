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
        if (data.weather == undefined) {
            alert("Please enter the name of a real city.");
            return;
        }
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".area").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"
        document.querySelector(".desc").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".city").value)
    }
}

document.querySelector(".location input[type='submit']").addEventListener('click', function() {
    weather.search();
})

document.querySelector(".location").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})