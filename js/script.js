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
      <div class="grader_font">${Math.round(data.current.temp)}°</div>
      `;

      document.querySelector('.vind').innerHTML += ` 
      <p class="bold">${data.current.wind_speed} m/s</p>
      `;

      document.querySelector('.fuktighet').innerHTML += `
      <p class="bold">${data.current.humidity} %</p>
      `;
    });
}
getWeather();

function getWeatherMolde() {
  fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=62.7372&lon=7.1607&appid=c00a488091e665d81db55d4e2948cf0d&units=metric'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let locationIcon = document.querySelector('.weather-icon-molde');
      const icon = data.current.weather[0].icon;
      locationIcon.innerHTML = `<img src="icons/${icon}.png"></img>`;

      document.querySelector('.grader-molde').innerHTML = `
      <div class="grader_font">${Math.round(data.current.temp)}°</div>
      `;

      document.querySelector('.vind-molde').innerHTML += ` 
      <p class="bold">${data.current.wind_speed} m/s</p>
      `;

      document.querySelector('.fuktighet-molde').innerHTML += `
      <p class="bold">${data.current.humidity} %</p>
      `;
    });
}
getWeatherMolde();

function getWeatherTrondheim() {
  fetch(
    'https://api.openweathermap.org/data/2.5/onecall?lat=63.4305&lon=10.3951&appid=c00a488091e665d81db55d4e2948cf0d&units=metric'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let locationIcon = document.querySelector('.weather-icon-trondheim');
      const icon = data.current.weather[0].icon;
      locationIcon.innerHTML = `<img src="icons/${icon}.png"></img>`;

      document.querySelector('.grader-trondheim').innerHTML = `
      <div class="grader_font">${Math.round(data.current.temp)}°</div>
      `;

      document.querySelector('.vind-trondheim').innerHTML += ` 
      <p class="bold">${data.current.wind_speed} m/s</p>
      `;

      document.querySelector('.fuktighet-trondheim').innerHTML += `
      <p class="bold">${data.current.humidity} %</p>
      `;
    });
}
getWeatherTrondheim();
