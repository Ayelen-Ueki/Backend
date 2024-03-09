const express = require('express')
const {createHash, isValidatePassword} = require('../utils/bcryps')
const { create } = require('connect-mongo')
const {Router} = express
const router = new Router()
const users = []

router.post('/register',(req,res)=>{
    let newUser = req.body
    newUser.id = Math.random()
    //Para guardar la password encriptada en mi base de datos
    newUser.password = createHash(userNew.password)
    users.push(newUser)
    res.send("User guardado correctamente")
})

router.post('/login',(req,res)=>{
    let newUser = req.body
    //Para ver si el usuario que esta tratando de ingresa esta en la base de datos
    let userFound = users.find(u=>{
        return u.email == newUser.email
    })
    //Para validar que la pass sea correcta para ese usuario
    if(userFound){
       if(!isValidatePassword(userFound, newUser.password)) res.send('usuaerio Incorrecto') 
       res.send('Usuario logueado correctamente')
    }
    res.send('Usuario no encontrado')
})

router.get('/allUsers', (req,res)=>{
    req.send(users)
})
module.exports = router