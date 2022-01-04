//Fetch information from Open Weather Map
let weather = {
  apiKey: "626a0aae08dcb504d6a492fcb2c30e14", //API key that allows use of info
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
  //Displaying and organizing info from API 
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerHTML = temp + "°F";
    document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " mph";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1100/?"+ name +"')"
},
  //Allows input to be searched throughout the API to pull information about city
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

// Search button that initialized the search function
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
// Allows "enter" to be used and have same functionality as the search button
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
