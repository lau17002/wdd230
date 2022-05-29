
const temp = parseInt(document.querySelector('#temp').innerHTML);
const speed = parseInt(document.querySelector('#speed').innerHTML);
const wChill = document.querySelector('#chill');


if ((temp <= 50) && (speed > 3)) {
     const f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
     wChill.textContent = f;
}
else {
    f = "N/A";
    wChill.textContent = f;
}




