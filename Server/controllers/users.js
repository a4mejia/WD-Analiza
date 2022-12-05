const express =require ('express');
const users = require ('../models/users');

const app = ecpress.Router();

app 
    .get('/', (req, res, next) => {
        users.getUsers()
        .then( x => res.status(200).send(x))
        .catch(next);
    })
    .get('/:name', (req, res, next)=>{
        users.getUser(req.params.name)
        .then(user =>{
            if( user){
                res.status(200).send(user);
            }
            else{
                res.status(404).send('user not found');
            }
        })
        .catch(next);
    })
    .post('/', (req, res, next) => {
        users.addUser(req.body)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .patch('/:name', (req, res, next) => {
        users.updateUser(req.params.name, req.body)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        users.deleteUser(req.params.name)
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
    .post('/seed', (req, res, next) => {
        users.seed()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
;
