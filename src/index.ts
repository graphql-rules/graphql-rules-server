require('dotenv').config();

import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import getAuthRouter from './auth';
import passport from './auth/passport';

const PORT = process.env.PORT;

var app = express();

// app.use(cookieParser);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', getAuthRouter());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function() {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
