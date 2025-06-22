// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// MongoDB schema and model
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  age: Number
}));

// POST endpoint to create a user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Export app for testing
module.exports = app;
