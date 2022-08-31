const express = require('express');
const expresslayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded( { extended: true}));
app.use(express.static('public' ));
app.use(expresslayouts);

app.set('layout', './layout/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/drinkRoutes.js')
app.use('/', routes);

app.listen(port, ()=> console.log(`Listening to port ${port}`));

