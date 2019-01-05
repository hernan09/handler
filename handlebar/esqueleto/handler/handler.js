/* GET home page. */


function form(req, res) {
    res.render('index')
}

function postform(req, res) {
    req.session.nombre = req.body.nombre
    req.session.pass = req.body.pass
    if (req.session.nombre == 'hernan' && req.session.pass == "1234") {
        res.redirect('/api/admin')
    } else {
        res.redirect('/api/home')
    }

}

function home(req, res) {
    if (req.session.nombre) {
        res.render('home', { nombre: req.session.nombre })
    } else {
        res.redirect('/api/form')
    }
}

function adminrut(req, res) {
    if (req.session.nombre) {
        res.render('admin', { nombre: req.session.nombre })
    } else {
        res.redirect('/api/form')
    }
}

function salir(req, res) {
    req.session.nombre = null
    res.redirect('/api/form')
}






module.exports = {

    form,
    postform,
    home,
    adminrut,

    salir
}