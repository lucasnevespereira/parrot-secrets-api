const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// Setup Mongoose
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.log('Something went wrong connecting to database.', err);
  });

module.exports = app;
