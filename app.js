const express = require('express')
const app = express()
app.set('view engine','ejs')
app.get('/', function (req, res) {
    const datos = [
        {nombre: 'Ana', apellidos:'Garcia'},
        {nombre: 'Juan', apellidos:'López'}
    ]
  res.render('index',{datos:datos});
})

app.get('/saludo', function (req, res) {
    res.render('saludo',{hora:16});
})

app.get('/productos', function (req, res) {
    const producto = {id: '1', nombre:'coche', peso:'500',colores:['rojo','negro']}
    res.render('productos',{producto:producto});
})

app.listen(3000)