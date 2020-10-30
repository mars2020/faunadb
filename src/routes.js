const routes = require('express').Router();
const {q,client} = require('./db');

routes.get('/', async (req,res) => {
    console.log('Hello World');

    res.status(200).json("Hello World");
})

routes.get('/users', async (req,res) => {
    try {
        const users = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection('users'))),
                q.Lambda(x => q.Get(x))
              )
        );
        
        console.log(users)
        res.status(200).send(users);
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
})

routes.post('/users', async (req,res) => {
    try {
        console.log(req.body)

        const data = {
            name:req.body.name,
            email: req.body.email
        }

        const new_user = await client.query(
            q.Create(
                q.Collection('users'), {data}
            )
        );

        res.status(200).send(new_user);
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
})





module.exports = routes;