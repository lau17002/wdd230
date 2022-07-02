// select HTML elements in the document
const wChill = document.querySelector('#chill');
const curTemp = document.querySelector('#temp');
const curSpeed = document.querySelector('#speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=Imperial&appid=45d46e6e004233d7386db00671da8a44';

apiFetch(url);

async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        displayResults(error);
    }
}

function displayResults(weatherData) {
    const t = weatherData.main.temp.toFixed(1);
    const s = weatherData.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    curTemp.textContent = t;
    curSpeed.textContent = s;

    if ((t <= 50) && (s >= 3)) {
        const f = (35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))).toFixed(1);
        wChill.textContent = f;
    }
    else {
       const f = "N/A";
       wChill.textContent = f;
    }
}





