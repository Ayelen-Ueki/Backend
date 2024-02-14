// Conectar Mongoose
const mongoose = require('mongoose');

module.exports={
    connect:()=>{
        return mongoose.connect("mongodb+srv://ayeueki:proyectoBackend1@cluster0.bkssllr.mongodb.net/")
        .then(()=>{
            console.log("Base de datos conectada")
        }).catch(()=>{
            console.log(err)
        })
    }
}