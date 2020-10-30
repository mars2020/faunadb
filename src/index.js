require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const routes = require('./routes');

app.use(bodyParser.json());
app.use('/',routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port: ${port}`));