const date2 = document.querySelector('#curYear');

try {
  const options = {year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}

document.querySelector('#lastMod').textContent = `Last Updated: ${document.lastModified}`;