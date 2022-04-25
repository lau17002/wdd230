const date2 = document.querySelector('#curYear');

try {
  const options = {year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}

const hours = [
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11"
]

let d = new Date(document.lastModified);
const day = d.getDate();
const month = d.getMonth()+1;
const year = d.getFullYear();
const hour = hours[d.getHours()];
const minute = d.getMinutes();
const second = d.getSeconds();
const modDate = `${month}/${day}/${year} ${hour}:${minute}:${second}`;

document.getElementById("lastMod").textContent = modDate;