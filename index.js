const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

const corsOptions = {
    origin: '*',
    optionsSuccesStatus: 200
}

app.use(cors(corsOptions))

//Capturar body
app.use(bodyparser.urlencoded({
    extended: false
}))

app.use(bodyparser.json())

//Conexion a la base de datos
const url = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.qexcvl2.mongodb.net/${process.env.DBNAME}`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a la base de datos'))
.catch((error) => console.log('Error '+ error))

//Creacion e importacion de rutas
const authRoutes = require('./routes/auth')

//Ruta del middleware
app.use('/api/user', authRoutes)

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