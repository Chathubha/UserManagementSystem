
const express = require('express');
const UserController = require('./route/userRoutes');
const app = express();


app.use('/api/v1/user',UserController)

app.listen(5000,()=>console.log('App running on Port 5000'))

//to access user API use below Path
//http://localhost:5000/api/v1/user (get and post method)
//http://localhost:5000/api/v1/user/anyid (delete and put method)
