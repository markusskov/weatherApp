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
      <div class="grader_font">${Math.round(data.current.temp)}°</div>
      `;

      document.querySelector('.vind').innerHTML = `
      <p>Vindstyrke:</p><p class="bold">${data.current.wind_speed} m/s</p>
      `;

      document.querySelector('.fuktighet').innerHTML = `
      <p>Fuktighet:</p><p class="bold">${data.current.humidity} %</p>
      `;
    });
}
getWeather();

// .then((data) => console.log(Math.round(data.current.temp)))
