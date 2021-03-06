const express = require('express');
const server = express();

server.use(express.json());


server.get('/', (req, res) => {
  res.status(200).send('API is running');
});

server.get('/games', (req, res) => {
	const games = req.body
  res.status(200).json([]);
});

server.post('/games', (req, res) => {
    const { title, genre, releaseYear } = req.body;
    res.status(200).json({ title: title, genre: genre, releaseYear: releaseYear })
    if (!title || !genre || !releaseYear) return res.status(422).json({ errorMsg: 'Error missing info - Please fill out all fields' })
});


module.exports=server;



