const requestURL = 'json/data.json';
const cards = document.querySelector('.spotlight');

fetch(requestURL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    let qualified = business.filter(business => (business.membership == 'Gold' || business.membership == 'Silver'));
    for (let i = 0; i < 3; i++) {
        rand = Math.floor(Math.random() * qualified.length);
        displayBusiness(qualified[rand]);
        qualified = qualified.filter(business => (business.name != qualified[rand].name));
    }
  });

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let picture = document.createElement('img');
    let title = document.createElement('p');
    let line = document.createElement('hr');
    let website = document.createElement('a');
    let contact = document.createElement('p');
    
    card.setAttribute('class', 'placeholder-spot');

    website.setAttribute('href', business.website);
    website.textContent = (`${business.name}.com`);
    contact.textContent = `${business.number}`;
    title.textContent = business.title;
  
    picture.setAttribute('src', business.imageurl);
    picture.setAttribute('alt', business.name);
    picture.setAttribute('loading', 'lazy');

    card.appendChild(picture);
    card.appendChild(title);
    card.appendChild(line); 
    card.appendChild(website);
    card.appendChild(contact);   
  
    document.querySelector('.spotlight').appendChild(card);
}


