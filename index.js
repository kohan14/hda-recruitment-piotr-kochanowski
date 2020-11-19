const express = require('express');
const app = express();
const port = 3000;

// Database mocked
const db = {
  people: [
    { name: 'John', age: 27 },
    { name: 'Jack', age: 19 },
    { name: 'Mack', age: 51 },
    { name: 'Sasin', age: 70 },
    { name: 'Richard', age: 34 },
    { name: 'Andrew', age: 42 },
  ],
};

//Use json extension for parsing data
app.use(express.json());

//Serve FE static files
app.use('/', express.static('client'));

//Form post from FE
app.post('/people', (req, res) => {
  res.send(req.body);
  console.log('SERVER: ADDED NEW RECORD TO DB');
  console.log(req.body);
  db.people.push(req.body);
});

//Get people for search
app.get('/people', (req, res) => {
  const { search } = req.query;
  const filteredResult = db.people.filter(item => {
    const { name } = item;
    if (name.toLocaleLowerCase().indexOf(search) !== -1) {
      return name;
    }
  });
  res.send(filteredResult);
  console.log(
    `SERVER: Client asked /people for data with ${search} query parameter`
  );
});
// if (taskPhrase.toLowerCase().indexOf(filteredPhrase) != -1)
//Start server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
