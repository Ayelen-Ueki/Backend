import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';

const express = require('express')
const{Router}=express
const router = new Router()

Router.get('/home', (req, res)=>{
    //se usa para mostrar cosas de forma dinamica entre {{}} --> ver en home.handlebars
    res.render("home", {nombre: 'Aye'});
})

module.exports = router