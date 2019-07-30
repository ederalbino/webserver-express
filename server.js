const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static( __dirname+'/public' ));

//Expres HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home', {
        nombre:"albino"
    })
})

app.get('/about', function (req, res) {
    res.render('about')
})


/*
app.get('/', function (req, res) {
    //res.send('Holaaaa')

    let salida = {
        nombre: "eder",
        edad: "24",
        url: req.url
    }
    res.send(salida)

})

app.get('/data', function (req, res) {
    res.send("Hola data")

})
*/

app.listen(3000, () =>{
    console.log("Escuchando peticiones en 3000");
})