const express = require('express');
const mongoose = require('./database');

const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Define your routes here
// For a simple login page, you might have a login route
const User = require('./models/user'); // Create a User model

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful' });
  });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
