const faunadb = require('faunadb');

const q = faunadb.query;

const client = new faunadb.Client({secret: process.env.FAUNA_SECRET});

if (typeof client !== 'undefined') {
    console.log('Connection to FaunaDB has been made')
}

module.exports = {
    q: q,
    client: client
};