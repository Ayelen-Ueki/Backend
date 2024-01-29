import { Express } from "express";
import routerProd from './routes.js';
import path from 'path'
import {__dirname} from './paths.js ';


//Activo y pongo en funcionamiento express
const express = require('express')
const app = express()
//Guardamos el puerto en el que vamos a trabajar en una constante, ya sea el 8080 que es nuestro server local o cualquiera que se le asigen a la app para trabajar (esto se hace con process)
const PORT = 8080 || process.env.PORT    

// Para que express reconozca handlebars
const handlebars = require('express-handlebars')

//Array para guardar mis mensajes
let arrMessage = []

//Configurar carpeta estatica (publica)
app.use(express.static(__dirname +'/public'))

//Para inicializar handlebars dentro de mi aplicacion (configurar el motor de plantilla)
app.engine('handlebars', handlebars.engine())
//Para habilitar handlebrs para las siguientes views
app.set('view engine', 'handlebars')
//Para que express reconozca la carpeta views
app.set('views', __dirname, '/views')

//Me traigo mi router de home.router
const homeRouter = require('./routes/home.router.js')
//Inicializo mis rutas desde la carpeta principal para que las reconozca. El primer argumento va asobreponerse a todas las rutas que pertenecen a todas las rutas a las que quiera acceder
app.use('/home', homeRouter)

//Para conectarme con el cliente a traves de socket
const http =require('http')
//Server http
const server = http.createServer(app)
//Para inicializar el server
const {Server} = require('socket.io')
const io = new Server(server)
//Para escuchar la conexion
io.on('conection', (socket)=>{
    //Para enviar mensajes desde el servidor que luego va a tener que escuchar mi cliente
    socket.emit('welcome', 'hola')
    //Para escuchar el mensaje que esta enviando el cliente
    socket.on('new-messages', (data)=>{
        arrMessage.push(data)
        //utilizo la propiedad sockets de io para conectarme a varios sockes a la vez y no solo al que estoy usando yo
        io.sockets.emit('messages-all', arrMessage)
    })
})


//Tengo que escuchar a mi servidor
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

