const express = require('express')
const postsController = require ('.controllers/posts');

const hostname ='12.0.0.1';
const port = process.env.PORT ||3003;
const app = express()

app.use (express.static('no-framework'));
app.use ('/v1/posts/', postsController);
app.listen(port, ()=>{
    console.log('Server running at http://${hostname}:${port}/')
})