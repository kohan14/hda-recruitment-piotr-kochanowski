import formSubmit from './src/formSubmit.js';

///Dom elements
const form = document.querySelector('#add-form');

/// Attach event listeners
form.addEventListener('submit', (e) => formSubmit(e, form));

