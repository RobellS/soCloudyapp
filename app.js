let weather = {
  apiKey: "626a0aae08dcb504d6a492fcb2c30e14",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
   document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°F";
    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " mph";
    document.querySelector(".weather").classList.remove("loading")
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1100/?"+ name +"')"
},
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
