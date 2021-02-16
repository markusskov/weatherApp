// Oslo API

async function getWeatherOslo() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=59.9139&lon=10.7522&appid=c00a488091e665d81db55d4e2948cf0d&units=metric'
    );
    const data = await response.json();
    console.log(data);

    document.querySelector('.oslo-degree').innerHTML = `${Math.round(
      data.current.temp
    )}°`;

    document.querySelector('.oslo-info').innerHTML = `<p>Wind Speed: 
    ${data.current.wind_speed} m/s </p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Feels like: ${Math.round(data.current.feels_like)}°</p>
    `;
  } catch (error) {
    console.log(error);
  }
}
getWeatherOslo();

// Molde API

async function getWeatherMolde() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=62.7372&lon=7.1607&appid=c00a488091e665d81db55d4e2948cf0d&units=metric'
    );
    const data = await response.json();
    console.log(data);

    document.querySelector('.molde-degree').innerHTML = `${Math.round(
      data.current.temp
    )}°`;

    document.querySelector('.molde-info').innerHTML = `<p>Wind Speed: 
    ${data.current.wind_speed} m/s </p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Feels like: ${Math.round(data.current.feels_like)}°</p>
    `;
  } catch (error) {
    console.log(error);
  }
}
getWeatherMolde();

// Trondheim API

async function getWeatherTrondheim() {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=63.4305&lon=10.3951&appid=c00a488091e665d81db55d4e2948cf0d&units=metric'
    );
    const data = await response.json();
    console.log(data);

    document.querySelector('.trondheim-degree').innerHTML = `${Math.round(
      data.current.temp
    )}°`;
    document.querySelector('.trondheim-info').innerHTML = `<p>Wind Speed: 
    ${data.current.wind_speed} m/s </p>
    <p>Humidity: ${data.current.humidity}%</p>
    <p>Feels like: ${Math.round(data.current.feels_like)}°</p>
    `;
  } catch (error) {
    console.log(error);
  }
}
getWeatherTrondheim();
