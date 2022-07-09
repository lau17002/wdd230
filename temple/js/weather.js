// select HTML elements in the document
const curTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#cond');
const humid = document.querySelector('#humid');
const nameCity = document.querySelector('#weatherName');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=San Diego&units=Imperial&appid=45d46e6e004233d7386db00671da8a44';

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
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    curTemp.textContent = weatherData.main.temp;
    humid.textContent = weatherData.main.humidity;
    nameCity.textContent = weatherData.name;
}