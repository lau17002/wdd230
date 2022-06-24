
const temp = parseInt(document.querySelector('#temp').innerHTML);
const speed = parseInt(document.querySelector('#speed').innerHTML);
const wChill = document.querySelector('#chill');

// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const curSpeed = document.querySelector('#speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=Imperial&appid=45d46e6e004233d7386db00671da8a44';

apiFetch(url);

async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);
    curSpeed.innerHTML = weatherData.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
}

if ((temp <= 50) && (speed > 3)) {
    const f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    wChill.textContent = f;
}
else {
   f = "N/A";
   wChill.textContent = f;
}




