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