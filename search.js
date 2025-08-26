const API_KEY = "7243524df7ed8da4bf299a49a0c434f2";
//getting elements from the html by id:
const inputSearch = document.getElementById("input-search");
const btn = document.getElementById("btn");
const weather = document.getElementById("weather");
// Function to fetch weather data from OpenWeather API
async function fetchweatherdara(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    if (data.cod !== 200) {
      weather.innerHTML = "No weather found";
      return;
    }
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
}
// Function to display weather data in the page
function showweather(data) {
  weather.innerHTML = `
     <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
     `;
}
// Event listener for the search button
btn.addEventListener("click", async function () {
  const city = inputSearch.value.trim();
  if (city === "") {
    weather.innerHTML = "please enter the name of city";
    return;
  }
  const data = await fetchweatherdara(city);

  if (data) {
    showweather(data);
  } else {
    weather.innerHTML = "No weather found";
  }
});
