import { Router } from "express";

const routerProd = Router ()

routerProd.post('/', async(req, res)=>{
    const conf = await productManager.addPrdouct(req.body) 
    if(conf) {
        res.status(201).send("Producto creado")
    }
    else{
        res.status(400).send("Producto ya existente")
    }
})