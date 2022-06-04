//Responsive nav
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


//Last modification
const date2 = document.querySelector('#curYear');

try {
  const options = {year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}

document.querySelector('#lastMod').textContent = `Last Modification: ${document.lastModified}`;


//Current date in header
const datefieldUK = document.querySelector("#curDate"); 

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;

//Banner

const banner = document.querySelector('#banner');

if (now.getDay() == 3 || now.getDay() == 2){
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

//Number of visits
const visitsDisplay = document.querySelector(".visit");

let numVisits = Number(window.localStorage.getItem("visit-ls"));
let lastVisit = Number(window.localStorage.getItem("lastVisit"));

const timeBetween = Math.round((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));

if (numVisits !== 0) {
	visitsDisplay.textContent = timeBetween;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("lastVisit", Date.now());
localStorage.setItem("visit-ls", numVisits);



