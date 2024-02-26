const mongoose = require ('mongoose')

const CartSchema = new mongoose.Schema({
    data:{
        type: String,
        required: true
    },
    //En products tengo que meter lo productos que se vayan enviando de products.js
    products:{
        //los vamos a guardar dentro de un Objeto
        type: [
        {
            product:{
                type: mongoose.Schema.Types.ObjectId, //los productos se pushean a traves de su id
                ref:'products' //Nombre de la coleccion que estamos referenciando
            }
        }
        ]
    }
})

//se puede predefinir los populate para que se hagan automaticamente el findOne
Cart.Sechema.pre('find',function(){
    //hace referencia a la consulta del findOne
    this.populate('products.product')
})
const Cart = mongoose.model('Cart', CartSchema)
module.exports= Cart 