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

//Weather
window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector:".weatherWidget",
    apiKey:"43JPG95HR4V79SGPDQ86WGSD2", //Sign up for your personal key
    location:"Rexburg, ID", //Enter an address
    unitGroup:"us", //"us" or "metric"
    forecastDays:1, //how many days forecast to show
    title:"Rexburg, ID", //optional title to show in the 
    showTitle:true, 
    showConditions:true
});

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
