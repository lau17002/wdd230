const forecast = document.querySelector('.forecast');

const url2 = 'https://api.openweathermap.org/data/2.5/onecall?q=San Diego&units=Imperial&appid=3c305e5b4d0c2b853183003188b323ce';

apiFetch(url2);

async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        displayResults(error);
    }
}

function displayForecast(weatherData) {
    for (let i = 0; i < 3; i++) {
        let time = weatherData.daily[i];
        let card = document.createElement('div');
        let curDay = document.createElement('h3');
        let grid = document.createElement('div');
        let image = document.createElement('img');
        let temp = document.createElement('p');
        let cond = document.createElement('p');
        let breakLine = document.createElement('hr');
        let humid2 = document.createElement('p');

        
        image.setAttribute('src', `https://openweathermap.org/img/w/${time.weather[0].icon}.png`);
        image.setAttribute('alt', weatherData.daily[i].weather[0].description);
        cond.innerHTML = time.weather[0].description;
        temp.textContent = time.temp.day;
        humid2.textContent = time.humidity;
  
        grid.appendChild(image);
        grid.appendChild(temp);
        card.appendChild(curDay);
        card.appendChild(grid);
        card.appendChild(cond);
        card.appendChild(breakLine);
        card.appendChild(humid2);
  
        document.querySelector('.forecast').appendChild(card);
      }
  
}