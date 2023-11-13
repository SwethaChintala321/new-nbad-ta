const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let cartItems = [];

app.get('/api/cart', (req, res) => {
  res.json(cartItems);
});

app.post('/api/cart', (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.json({ success: true, cart: cartItems });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});