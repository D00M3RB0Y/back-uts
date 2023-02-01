const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

//Capturar body
app.use(bodyparser.urlencoded({
    extended: false
}))

app.use(bodyparser.json())

//Conexion a la base de datos

//CReacion e importacion de rutas

//Ruta del middleware

//Ruta raiz

app.get('/', (req, res) => {
    res.json({
        estado:true,
        mensaje: 'Si funciona!!1'
    })
})

//Arrancar el servidor
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`Escuchad en el puerto ${PORT}`)
})