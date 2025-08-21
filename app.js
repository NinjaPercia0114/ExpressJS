const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
