import { searchDb } from './api.js';

// Function to be debounced, gets data from api then creates li's with data and appends it to the DOM
export default async term => {
  console.log('CLIENT: Debounced search fired!');
  const container = document.querySelector('.search-results');
  container.innerHTML = '';

  if (term !== '') {
    const results = await searchDb(term.toLowerCase());
    console.log('CLIENT: Data fetched, inserting search list into the DOM');
    const elements = generateSearchItems(results);
    elements.forEach(element => container.appendChild(element));
  } else {
    console.log('CLIENT: Could not find that name in DB!');
  }
};

//Returns array of LI items
export const generateSearchItems = array => {
  if (Array.isArray(array) && array !== null) {
    const elements = array.map(item => {
      const { name, age } = item;
      const element = document.createElement('li');
      element.textContent = `Name: ${name}, Age:${age}`;
      return element;
    });
    return elements;
  }
};
