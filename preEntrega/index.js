import { Express } from "express";
import routerProd from './routes.js';
import path from 'path'
import {__dirname} from './paths.js '

const PORT = 8000
const app = express()

app.use('/api/carts', routerCart)
app.use('/api/products', routerProd)
app.use('/static', express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

