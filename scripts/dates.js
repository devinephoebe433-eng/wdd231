// Current Year
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// Last Modified Date
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;
