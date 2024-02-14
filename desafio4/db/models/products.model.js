const { modelNames } = require("mongoose");

const mongoose = required('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    price:{
        type:Number,
        require: true
    },
    category:{
        type: String,
        require: true,
        enum:[Tortas, Galles, Alfajores, Combos, Otros]
    },
    stock:{
        type: Number, 
        default: 20
    }
})

const Product = mongoose.model('products', ProductSchema)
module.exports=Product