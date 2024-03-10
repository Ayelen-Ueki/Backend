const express = require('express')
const {createHash, isValidatePassword} = require('../utils/bcryps')
const { create } = require('connect-mongo')
const {Router} = express
const router = new Router()
const users = []
const passport = require ('passport')
import { generaToken } from '../index'

//Agregamos un middleware en Register utilizando una propiedad de passport que require el nombre de la estrategia que usamos antes en el file de passport.jsz
router.post('/register',passport.authenticate('register',{failureRedirect:'/user/failedRegister'}),(req,res)=>{
    res.send('Usuario registrado correctamente')
    // let newUser = req.body
    // newUser.id = Math.random()
    // Para guardar la password encriptada en mi base de datos
    // newUser.password = createHash(userNew.password)
    // users.push(newUser)
    // res.send("User guardado correctamente")
})

router.post('/login',(req,res)=>{
    let newUser = req.body
    //Para ver si el usuario que esta tratando de ingresa esta en la base de datos
    let userFound = users.find(u=>{
        return u.email == newUser.email
    })
    //Para validar que la pass sea correcta para ese usuario
    if(userFound){
       if(!isValidatePassword(userFound, newUser.password)) res.send('usuario Inc$ npm install passport-localorrecto') 
       res.send('Usuario logueado correctamente')
    let token = generaToken(userFound)
    }
    return res.status(200).json({
        //Este token sirve para identificar si alguien estuvo modificando datos del cliente o no --> podemos confirmarlo en la pag de JWT 
        newUser: userFound, token
    })
})

router.get('/allUsers', (req,res)=>{
    req.send(users)
})

//Que pasa si falla mi registro
router.get('/failedRegister',(req,res)=>{
    res.send('el registro ha fallado')
})
module.exports = router