const express = require('express')
const {Router} = express

const router = new Router()

router.get('/login-view',(req,res)=>{
    res.render('login')
})

router.get('/register-view',(req,res)=>{
    res.render('register')
})

router.get('/profile-view',(req,res)=>{
    res.render('profile')
})

module.exports = router