const requestURL = 'json/data.json';
const cards = document.querySelector('#location-hotel');
const button = document.querySelector('#rooms');
const list = document.querySelector('.list');
let i = 0;
let j = 0;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject['temple'];
    temple.forEach(displayLocation);
    
  }); 


function displayLocation(temple) {
    // Create elements to add to the document
    let location = document.createElement('option');

    location.textContent = temple.name;
    location.setAttribute('value', temple.name);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#location-hotel').appendChild(location);
  }


button.addEventListener("click", () => {
    if (i < 5 || i - j < 5) {
        i += 1;
        const listItem = document.createElement("li");
        listItem.textContent = `Select room type:`;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove Room";

        const label1 = document.createElement('label');
        const label2 = document.createElement('label');
        const label3 = document.createElement('label');
        const input1 = document.createElement('input');
        const input2 = document.createElement('input');
        const input3 = document.createElement('input');

        input1.setAttribute('type', 'radio');
        input2.setAttribute('type', 'radio');
        input3.setAttribute('type', 'radio');
        input1.setAttribute('name', `roomtype${i}`);
        input2.setAttribute('name', `roomtype${i}`);
        input3.setAttribute('name', `roomtype${i}`);
        input1.setAttribute('value', '1 Queen bed');
        input2.setAttribute('value', '2 Queen beds');
        input3.setAttribute('value', '1 King bed');

        
        label1.textContent = "1 Queen bed";
        label2.textContent = " 2 Queen beds";
        label3.textContent = "1 King bed";
        label1.prepend(input1);
        label2.prepend(input2);
        label3.prepend(input3);

        list.appendChild(listItem);
        list.appendChild(label1);
        list.appendChild(label2);
        list.appendChild(label3);
        list.append(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
            list.removeChild(deleteBtn);
            list.removeChild(label1);
            list.removeChild(label2);
            list.removeChild(label3);
            j += 1;
        });
    }
});
