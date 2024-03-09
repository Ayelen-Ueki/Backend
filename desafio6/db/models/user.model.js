const { modelNames } = require("mongoose");
const mongoose = required('mongoose');

const ProductSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
        index: true
    },
    password:{
        type: String,
        required: true,
    },
    tel:{
        type: Number, 
        required: true,
    }
})


//El primer argumento es el nombre de la colaccion en Mongo
const Product = mongoose.model('products', ProductSchema)
module.exports=Product