// Desafío 3
const express = require('express')
const uuid4 = require ('uuid4')
const { default: routerProd } = require('../preEntrega/routes')

const app = express()
const PORT = 8000

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi eCommerce')
})

app. get("/allProducts", async(req, res)=>{
    let response = await products.allProducts()
    res.send(response)
})

app.get('/product/:id', (req, res)=>{
    let prodId = req.params.id
    let prodFound = prod.find(product => {
        return product.id === prodId
    })
})

app.listen (PORT, () => {
console.log('Server con express', PORT)
})   