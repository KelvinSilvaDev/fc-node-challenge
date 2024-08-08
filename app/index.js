const express = require ('express');
const mysql = require ('mysql2');

const app = express ();
const port = 3000;

const connection = mysql.createConnection ({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

app.get ('/', (req, res) => {
  const name = 'Full Cycle Rocks!';
  connection.query (`INSERT INTO people(name) VALUES(?)`, [name], err => {
    if (err) throw err;

    connection.query ('SELECT name FROM people', (err, results) => {
      if (err) throw err;

      const namesList = results.map (row => `<li>${row.name}</li>`).join ('');
      res.send (`<h1>${name}</h1><ul>${namesList}</ul>`);
    });
  });
});

app.listen (port, () => {
  console.log (`Server running on port ${port}`);
});
