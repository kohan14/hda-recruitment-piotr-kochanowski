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

// Request handlers
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Start server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
