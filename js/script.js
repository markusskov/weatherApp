function getWeather() {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Oslo&lang=no&appid=c00a488091e665d81db55d4e2948cf0d&units=metric'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector('.oversikt').innerHTML = `
      <h1>Været i dag</h1>
      <h2>${data.name}:</h2> 
      <p>Det er: ${data.main.temp} grader nå og ${data.weather[0].description}, men det føles som ${data.main.feels_like} grader.</p>
      <p>Makstemperaturen var ${data.main.temp_max} og det laveste var ${data.main.temp_min}.</p>
      <p>Vindstyrken er på ${data.wind.speed} km/t.</p>

      `;
    });
}
getWeather();
