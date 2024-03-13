const express = require('express');
const routes = express.Router();
const AdminController = require('../controllers/AdminController');
const passport = require('passport');

routes.get('/register',AdminController.register);
routes.get('/viewRegister',passport.authenticate('jwt',{ session : false}),AdminController.viewRegister);
routes.delete('/deleteUser',AdminController.deleteUser);
routes.put('/updateUser',AdminController.updateUser);
routes.post('/login',AdminController.login);
routes.get('/post',AdminController.post);
routes.get('/viewPost',passport.authenticate('jwt',{ session : false}),AdminController.viewPost);



module.exports = routes;