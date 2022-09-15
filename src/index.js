//date
const d = new Date();
document.getElementById("date").innerHTML = d;

//search engine for city
function displaySearchWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(city) {
  let apiKey = "ca5af28648d86b7925348bb9fb85cd3a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displaySearchWeather);
}

function citySearch(event) {
  event.preventDefault();
  let city = document.querySelector("#cities").value;
  search(city);
}

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "ca5af28648d86b7925348bb9fb85cd3a";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(displaySearchWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("form");
form.addEventListener("submit", citySearch);

let currentlocation = document.querySelector("#current-location");
currentlocation.addEventListener("click", getCurrentLocation);

search("Mexico City");
