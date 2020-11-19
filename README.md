### hda-recruitment-piotr-kochanowski
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
**This app is a part of recruitment process for HDA**


In main directory there is backend made with node.js with express framework, client folder has the whole frontend.
I've decided to use SSR and serve FE as static files with BE, to simply avoid having to open both. 

# BE:
The backend is located in `index.js` file in main directory. On top of the file is all of the configuration.
It has a **GET** method for serving html file and other static files when `HTTP GET '/'`.
It has http **GET** method to fetch **people** with query parameter and **POST** method for accepting JSON data and adding it to **DB**

# FE:
`/client/index.js` is the entry js file linked to `index.html`.

**ADD module** - Provides validation  ***mostly*** via httml attributes (i've used some vanilla js checking values). There is also feature which generates popup messages depending on if the validation was successfull or not  - `/client/src/alert.js`. In `/client/src/formSubmit` there is all the logic for sending form. 

**SEARCH module** - takes query string from input and makes `HTTP GET /people/?name=PARAM` request, the function is being **debounced** first so it is delayed, and every keypress resets count. Then the response from server is passed to a function which generates `<li>Name:XSY,AGE:123</li>` and appends it to the DOM.
Logic is split between `/client/src/searchBar.js` and helper functions.

## Technologies
Project is created with:
* BE: Node.js with Express.js
* FE: Vanilla JS
* Styling: CSS
	
## Setup
To run this project copy my repository and use
```
node index.js
```
`index.js` in the main folder is the BE server.
