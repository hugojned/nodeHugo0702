require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

app.set('view engine', 'hbs');

app.get('/generic', (req,res) => {
    res.render('generic',{
        nombre: 'Hugo JND',
        edad: '21',
        titulo: 'no tengo jsjsjs'
    });
})

app.get('/elements', (req,res) => {
    res.render('elements',{
        nombre: 'Hugo JND',
        edad: '21',
        titulo: 'no tengo jsjsjs'
    });
})

app.get('/', (req,res) => {
    res.render('home',{
        nombre: 'Hugo JND',
        edad: '21',
        titulo: 'no tengo jsjsjs'
    });
})


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})

// * = global
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })