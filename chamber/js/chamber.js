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