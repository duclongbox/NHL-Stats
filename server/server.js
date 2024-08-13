/*****************************************************************************
* WEB422 – Project
* I declare that this assignment is my own work in accordance with SenecaAcademic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Group member Name: Amir Mullagaliev, Duc Long Hoang
* Student IDs: 128102225, 122702228
* Date: 08/13/2024
*****************************************************************************/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/users');
const teams = require('./routes/teams');
const favouriteteam = require('./routes/favouriteteam');
const app = express();
const cors = require('cors');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// CORS middleware
app.use(cors({
  origin: 'https://nhl-stats-frontend-phi.vercel.app', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent
}));
// DB Config
const db = 'mongodb+srv://duclongbox:hoangduclong@cluster0.k0roye6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/teams', teams);
app.use('/api/favouriteteam', favouriteteam);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));