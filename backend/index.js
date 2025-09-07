const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db');
const passport = require('passport');
const session = require('express-session');
require('./passport-setup');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', require('./routes/authRoutes'));

app.get('/api/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/api/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.send('You are logged in with Google!');
});

app.use('/api/upload', require('./routes/uploadRoutes'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});