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

function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let templeName = document.createElement('h3'); 
    let contact = document.createElement('p');
    let picture = document.createElement('img');
    let rent = document.createElement('p');
    let address = document.createElement('p');
    let like = document.createElement('button');

    if (temple.name == "San Diego") {
      like.setAttribute('onclick', 'sandiego()');
      like.setAttribute('id', 'like1')
    }
    else if (temple.name == "Bountiful") {
      like.setAttribute('onclick', 'bountiful()');
      like.setAttribute('id', 'like2')
    }
    else if (temple.name == "Fresno") {
      like.setAttribute('onclick', 'fresno()');
      like.setAttribute('id', 'like3')
    }
    else if (temple.name == "Los Angeles") {
      like.setAttribute('onclick', 'angeles()');
      like.setAttribute('id', 'like4')
    }
    else if (temple.name == "Sacramento") {
      like.setAttribute('onclick', 'sacramento()');
      like.setAttribute('id', 'like5')
    }
    else if (temple.name == "Redlands") {
      like.setAttribute('onclick', 'redlands()');
      like.setAttribute('id', 'like6')
    }

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

  function sandiego() {
    if (localStorage.countS) {
      localStorage.countS = Number(localStorage.countS) + 1;
    } else {
      localStorage.countS = 1;
    }
    document.getElementById("like1").innerHTML = localStorage.countS;
  }

  function bountiful() {
    if (localStorage.countB) {
      localStorage.countB = Number(localStorage.countB) + 1;
    } else {
      localStorage.countB = 1;
    }
    document.getElementById("like2").innerHTML = localStorage.countB;
  }

  function fresno() {
    if (localStorage.countF) {
      localStorage.countF = Number(localStorage.countF) + 1;
    } else {
      localStorage.countF = 1;
    }
    document.getElementById("like3").innerHTML = localStorage.countF;
  }
  function angeles() {
    if (localStorage.countA) {
      localStorage.countA = Number(localStorage.countA) + 1;
    } else {
      localStorage.countA = 1;
    }
    document.getElementById("like4").innerHTML = localStorage.countA;
  }
  function sacramento() {
    if (localStorage.countM) {
      localStorage.countM = Number(localStorage.countM) + 1;
    } else {
      localStorage.countM = 1;
    }
    document.getElementById("like5").innerHTML = localStorage.countM;
  }
  function redlands() {
    if (localStorage.countR) {
      localStorage.countR = Number(localStorage.countR) + 1;
    } else {
      localStorage.countR = 1;
    }
    document.getElementById("like6").innerHTML = localStorage.countR;
  }


