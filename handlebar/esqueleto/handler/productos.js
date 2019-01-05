const mongose = require('mongoose')
const producto = require('../squema/product')

function guardar(req, res) {

    producto1 = new producto()
    producto1.nombre = req.body.nombre,
        producto1.price = req.body.price,

        producto1.save((err, productoGuardado) => {
            if (err) res.status(500).send({ mensaje: `${err}` })


            res.redirect('/api/product')


        })
}



function updatear(req, res) {
    let productId = req.params.productId
    let cuerpo2 = req.body

    producto.findByIdAndUpdate(productId, cuerpo2, (err, producto) => {
        if (err) res.status(500).send({
            messaje: `${err}`
        })
        if (!producto) res.status(404).send({
            messaje: `no se pudo encontrar el producto`
        })

        res.redirect('/api/product')
    })






}

function buscarId(req, res) {
    if (req.session.nombre) {
        let productId = req.params.productId
        producto.findById(productId, (err, productoEncontrado) => {
            if (err) res.status(500).send({
                messaje: `${err}`
            })
            if (!producto) res.status(404).send({
                messaje: `no se pudo encontrar el producto`
            })
            res.render('shows', {
                data: productoEncontrado,
                nombre: req.session.nombre
            })
        })
    } else {
        res.redirect('/api/form')
    }


}

function buscarTodo(req, res) {
    if (req.session.nombre) {
        producto.find({}, (err, productEncontrados) => {
            if (err) res.status(500).send(`${err}`)
            if (!producto) res.status(404).send({
                mensaje: `no se encontraton`
            })

            res.render('tablaMongo', {
                productEncontrados,
                nombre: req.session.nombre
            })

        })

    } else {
        res.redirect('/api/form')
    }

}

function deletes(req, res) {
    let productId = req.params.productId
    producto.findById(productId, (err, producto) => {
        if (err) res.status(500).send(`${err}`)
        if (!producto) res.status(404).send({
            mensaje: `no se encontraton`
        })

        producto.remove((err) => {
            if (err) res.status(500).send({ mensaje: `no se pudo borrar` })
            res.redirect('/api/product')


        })

    })
}

function deleteTodo(req, res) {

    producto.findOneAndDelete({}, (err, producto) => {
        if (err) res.status(500).send(`${err}`)
        if (!producto) res.status(404).send({
            mensaje: `no se encontraton`
        })

        producto.remove((err) => {
            if (err) res.status(500).send({
                mensaje: `no se pudo borrar`
            })
            res.status(200).send({
                mensaje: `se han borrado correctamente`
            })
        })
    })
}

let update = function(req, res) {
    producto.findById(req.params.id, function(error, documento) {
        if (error) {
            res.send('Error al intentar modificar el personaje.');
        } else {
            var producto = documento;
            producto.nombre = req.body.nombre;

            producto.price = req.body.price;
            producto.save(function(error, documento) {
                if (error) {
                    res.send('Error al intentar guardar el personaje.');
                } else {
                    res.redirect('/api/tablaMongo');
                }
            });
        }
    });
};


module.exports = {
    guardar,
    buscarId,
    buscarTodo,
    deletes,
    deleteTodo,
    updatear,
    update

}