// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let items = [];

// get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// add new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  // check for bigger id in items
  const maxId = items.reduce((max, item) => Math.max(max, item.id), 0);
  newItem.id = maxId + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

// remove item
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});