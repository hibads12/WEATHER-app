const API_KEY = "7243524df7ed8da4bf299a49a0c434f2";
//getting elements from the html by id:
const inputSearch = document.getElementById("input-search");
const btn = document.getElementById("btn");
const weather = document.getElementById("weather");
// Use the Fetch API to get weather data:
btn.addEventListener("click", function () {
  const city = inputSearch.value.trim();
  if (city === "") {
    weather.innerHTML = "please enter the name of city";
    return;
  }
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(apiurl).then((response) => response.json())
  .then(data=>{
     weather.innerHTML=`
     <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
     `
  })
   .catch(error => {
      weather.innerHTML = "Error fetching data!";
      console.error(error);
    });
});
