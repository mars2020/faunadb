const express = require('express');
const faunadb = require('faunadb');


const app = express();

const client = faunadb.Client({'secret':process.env.FAUNA_KEY});

const port = process.env.PORT || 5000

app.listen(port, console.log(`App running on port: ${port}`));