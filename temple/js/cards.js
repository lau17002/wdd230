const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject['temple'];
    temple.forEach(displayTemple);
  });


function clickCounter() {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    
  }

function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let templeName = document.createElement('h2'); 
    let contact = document.createElement('p');
    let picture = document.createElement('img');
    let rent = document.createElement('p');
    let address = document.createElement('p');
    let like = document.createElement('button');

    like.textContent = 0;
    like.addEventListener('click', clickCounter());
 
    templeName.textContent = temple.name;
    contact.textContent = temple.number;
    rent.textContent = `Clothing rental: ${temple.rent}`;
    address.textContent = `${temple.street} ${temple.city} ${temple.code}`;

    picture.setAttribute('src', temple.imageurl);
    picture.setAttribute('alt', temple.name);
    picture.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(templeName);
    card.appendChild(like);
    card.appendChild(picture);
    card.appendChild(contact); 
    card.appendChild(address);
    card.appendChild(rent);   
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
  }
