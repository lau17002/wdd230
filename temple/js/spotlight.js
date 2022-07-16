const requestURL = 'json/data.json';
const cards = document.querySelector('.temple-info');

jsonFetch(requestURL);

async function jsonFetch(requestURL) {
  try {
    const response = await fetch(requestURL);
    if (response.ok) {
      const data = await response.json();
      let temple = data.temple;
      let rand = Math.floor(Math.random() * temple.length);
      displayTemple(temple[rand]);
      let lat = temple[rand].lat;
      let lon = temple[rand].lon;
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=Imperial&appid=45d46e6e004233d7386db00671da8a44`;
      apiFetch(url);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    displayTemple(error);
  }
}

function displayTemple(temple) {
    // Create elements to add to the document
    let contentHold = document.createElement('div');
    let title = document.createElement('h3');
    let content = document.createElement('p');
    let large = document.createElement('source');
    let medium = document.createElement('source');
    let image = document.createElement('img');
    let picture = document.createElement('picture');
    let link = document.createElement('a');

    large.setAttribute('srcset', temple.imageurlLarge);
    large.setAttribute('media', '(min-width: 64em)')
    medium.setAttribute('srcset', temple.imageurlMedium);
    medium.setAttribute('media', '(min-width: 32.5em)');
    image.setAttribute('src', temple.imageurl);
    image.setAttribute('alt', `${temple.name} temple`);
    image.setAttribute('loading', 'lazy');
    link.setAttribute('href', 'reservation.html');
    title.setAttribute('id', 'templeName');

    title.textContent = temple.name;
    content.textContent = `The ${temple.name} temple was announced on ${temple.announced}. Ground was broken
    on ${temple.ground} and it opened for use when it was dedicated on ${temple.dedicate}. The next 
    closing date is ${temple.closure} so plan your trip accordingly! Clothing rentals are ${temple.rent} 
    for patrons.`
    link.textContent = 'Make a resevation!';

    picture.appendChild(large);
    picture.appendChild(medium);
    picture.appendChild(image);
    contentHold.appendChild(title);
    contentHold.appendChild(content); 
    contentHold.appendChild(link);
    
    document.querySelector('.temple-info').appendChild(picture);
    document.querySelector('.temple-info').appendChild(contentHold);
}


// select HTML elements in the document
const curTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#cond');
const humid = document.querySelector('#humid');
const nameCity = document.querySelector('#weatherName');



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

  let iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  let desc = weatherData.current.weather[0].description;
    
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = desc;
  curTemp.textContent = `${(weatherData.current.temp).toFixed(1)}°F`;
  humid.textContent = weatherData.current.humidity;

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

    card.setAttribute('class', 'weather');
    grid.setAttribute('class', 'weather-grid');

    image.setAttribute('src', `https://openweathermap.org/img/w/${time.weather[0].icon}.png`);
    image.setAttribute('alt', time.weather[0].description);
    cond.innerHTML = time.weather[0].description;
    temp.textContent = `${(time.temp.day).toFixed(1)}°F`;
    humid2.textContent = `Humidity: ${time.humidity}%`;
    curDay.textContent = data.name;

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


