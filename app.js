const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});


// Setup Mongoose
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.log('Something went wrong connecting to database.', err);
  });

// Body Parser
app.use(bodyParser.json());

// Routes
const secretRoutes = require('./routes/secret');
const userRoutes = require('./routes/user');

app.use('/api/secret', secretRoutes);
app.use('/api/auth', userRoutes);



module.exports = app;
