const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

templeFetch();

async function templeFetch() {
  try {
    const response = await fetch(requestURL);
    if (response.ok) {
      const data = await response.json();
      for (let i = 0; i < data.temple.length; i++) {
        displayTemple(data.temple[i]);
      }
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    displayTemple(error);
  }
}

function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let templeName = document.createElement('h3'); 
    let contact = document.createElement('p');
    let picture = document.createElement('img');
    let rent = document.createElement('p');
    let address = document.createElement('p');
    let numLikes = document.createElement('p');
    let like = document.createElement('button');

    like.textContent = "Like";
    like.setAttribute('id', 'likebtn');
    numLikes.setAttribute('id', 'numLikes');

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
    card.appendChild(numLikes);
    card.appendChild(picture);
    card.appendChild(contact); 
    card.appendChild(address);
    card.appendChild(rent);   
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
  
    like.addEventListener('click', () => { 
      if (localStorage[temple.index]) {
        localStorage[temple.index] = Number(localStorage[temple.index]) + 1;
      } else {
        localStorage[temple.index] = 1;
      }
        numLikes.textContent = localStorage[temple.index];
    })
    numLikes.textContent = localStorage[temple.index];
    
}
