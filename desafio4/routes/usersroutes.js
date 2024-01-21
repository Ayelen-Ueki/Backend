import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

const express = require('express')
const{Router}=express
const router = new Router()

let users = [
    {
        name: 'Ayelen',
        lastName: 'Ueki',
        age: '27',
        email: 'ayeueki@gmail.com',
        phone: '111536430055'
    },
    {
        name: 'Facundo',
        lastName: 'Ueki',
        age: '25',
        email: 'facuueki@gmail.com',
        phone: '1234567891011'
    }
]

Router.get('/home', (req, res)=>{
    //se usa para mostrar cosas de forma dinamica entre {{}} --> ver en home.handlebars
    res.render("home", {nombre: 'Aye'});
})
Router.get('/userDetails', (req, res)=>{
    res.render("users", {
    name: 'Ayelen',
    lastName: 'Ueki',
    age: '27',
    email: 'ayeueki@gmail.com',
    phone: '111536430055'
    });
})

module.exports = router