var express = require('express');
var api = express.Router();
const product = require('../handler/productos')


/* GET users listing. */
api.post("/product", product.guardar)
api.get('/product/:productId', product.buscarId)
api.get('/product', product.buscarTodo)

api.post('/update/:productId', product.updatear)
api.get('/delete/:productId', product.deletes)
api.delete('/product/delete', product.deleteTodo)



//seccion de rutas para mysql



module.exports = api;