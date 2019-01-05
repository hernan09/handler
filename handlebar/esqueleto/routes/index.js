var express = require('express');
var api = express.Router();
const handler = require('../handler/handler')

api.get('/form', handler.form)
api.post('/form', handler.postform)
api.get('/home', handler.home)
api.get('/admin', handler.adminrut)
api.get('/salir', handler.salir)




module.exports = api