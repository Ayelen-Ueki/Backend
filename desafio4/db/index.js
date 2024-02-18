// Conectar Mongoose
const mongoose = require('mongoose');
const Cart = require('./models/cart.models')
const Product = require('./models/products.models')

module.exports={
    connect:()=>{
        return mongoose.connect("mongodb+srv://ayeueki:proyectoBackend1@cluster0.bkssllr.mongodb.net/")
        .then(async()=>{
            console.log("Base de datos conectada")
            //creamos un carrito
            Cart.create(data) 
            Product.create({
                name:'Torta de chocolate', 
                price:7000, 
                category:'Tortas', 
                stock: 5
            })
            //Completar con el id de algun producto creado. Populate desglosa un objeto para que se vea mejor
            let cart1 = await Cart.find({_id:''}).populate('products.product')
            //'product' es lo que yo habia establecido que iba a ir dentro de cart en el modelo de cart.js
            //Pusheo el producto con su id
            cart1.products.push({product:''})
            //puedo actualizar carritos a partir del id deaseado
            await Cart.updateOne({_id:''}, cart1)

        }).catch(()=>{
            console.log(err)
        })
    }
}