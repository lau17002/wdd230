const requestURL = 'json/data.json';
const cards = document.querySelector('.temple-info');

fetch(requestURL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject['temple'];
    rand = Math.floor(Math.random() * temple.length);
    displayTemple(temple[rand]);
  });

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


