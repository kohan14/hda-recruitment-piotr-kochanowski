import formSubmit from './src/formSubmit.js';
import generateSearchList from './src/searchBar.js';
import { debounce } from './src/helperFunctions.js';

///Dom elements
const form = document.querySelector('#add-form');
const searchBar = document.querySelector('#search-bar');

//Debounce search for limited http requests
const debouncedGenerateList = debounce(generateSearchList, 500);

/// Attach event listeners
form.addEventListener('submit', e => formSubmit(e, form));

searchBar.addEventListener('keyup', async e => {
  debouncedGenerateList(e.target.value);
});
