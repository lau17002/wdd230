const requestURL = 'https://lau17002.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    business.forEach(displayBusiness);
  });

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let member = document.createElement('p');
    let website = document.createElement('a');
    let contact = document.createElement('p');
    let email = document.createElement('p');
    let picture = document.createElement('img');

    website.setAttribute('href', business.website);
    website.textContent = (`${business.name}.com`);
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = business.name;
    member.textContent = `${business.membership} Member`
    contact.textContent = `${business.number} | `;
    email.textContent = `Email: ${business.email}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute('src', business.imageurl);
    picture.setAttribute('alt', business.name);
    picture.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(picture);
    card.appendChild(member);
    card.appendChild(contact);
    card.appendChild(website);
    card.appendChild(email);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
  }