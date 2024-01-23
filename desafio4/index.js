import { Express } from "express";
import routerProd from './routes.js';
import path from 'path'
import {__dirname} from './paths.js ';


const PORT = 8000
const app = express()
// Para que express reconozca handlebars
const handlebars = require('express-handlebars')

//Configurar carpeta estatica
app.use(express.static(__dirname+'/public'))
//Para inicializar handlebars dentro de mi aplicacion
app.engine('handlebars', handlebars.engine())
//Para que express reconozca la carpeta views
app.set('views', __dirname, '/views')
//Para habilitar handlebrs para las siguientes views
app.set('view engine', 'handlebars')

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

