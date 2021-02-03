function getWeather() {
  fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=59.9127&lon=10.7461&appid=c00a488091e665d81db55d4e2948cf0d&units=metric'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let locationIcon = document.querySelector('.weather-icon');
      const icon = data.current.weather[0].icon;
      locationIcon.innerHTML = `<img src="icons/${icon}.png"></img>`;

      document.querySelector('.grader').innerHTML = `
      <h3>Oslo, Norge</h3> 
     <div class="grader_font">${data.current.temp}°</div>

      `;

      document.querySelector('.oversikt').innerHTML = `
      <p>Vindstyrke:</p><p class="bold">${data.current.wind_speed} m/s</p>
      `;
    });
}
getWeather();
