const express =require ('express');
const users = require ('../models/users');

const app = ecpress.Router();

app 
    .get('/', (req, res, next) => {
        users.searchUser()
        .then( x => res.status(200).send(x))
        .catch(next);
    })
    .get('/:username', (req, res, next)=>{
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
    .post('/seed', (req, res, next) => {
        users.seed()
        .then(x=> res.status(200).send(x))
        .catch(next);
    })
;
