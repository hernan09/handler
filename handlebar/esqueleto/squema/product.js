const mongose = require('mongoose')
const Schema = mongose.Schema

let producto = new Schema({
    nombre: {
        type: String,
        required: true
    },
    price: {
        required: true,
        type: String,
        default: 0
    }


})

module.exports = mongose.model('producto', producto)