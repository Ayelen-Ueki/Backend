import { Router } from "express";

const routerProd = Router ()

// Para obtener la ruta a mis productos
routerProd.get('/', async(req, res)=>{
    const {limit} = req.query
    const prods = await productManager.getProducts()
    const products = prods.slice (0, limit)
    res.status(200).send(products)
})
// Para obtener la ruta a mis productos por id
routerProd.get('/:id', async(req, res)=>{
    const {id} = req.params
    const prod = await productManager.getProductsById()
    if(prod){
        res.status(200).send(prod)
    }
    else{
        res.status(404).send("Producto no encontrado")
    }
})
//Para actualizar productos
routerProd.post('/', async(req, res)=>{
    const conf = await productManager.addPrdouct(req.body) 
    if(conf) {
        res.status(201).send("Prodcuto creado")
    }
    else{
        res.status(400).send("Producto ya existente")
    }
})
//Para actualziar productos por id
routerProd.put('/:id', async(req, res)=>{
    const {id} = req.params
    const conf = await productManager.updatePrdouct(id, req.body) 
    if(conf) {
        res.status(201).send("Prodcuto actualizado correctamente")
    }
    else{
        res.status(404).send("Producto no encontrado")
    }
})
//Para borrar productos por id
routerProd.delete('/:id', async(req, res)=>{
    const {id} = req.params
    const conf = await productManager.deletePrdouct(id) 
    if(conf) {
        res.status(201).send("Prodcuto eliminado correctamente")
    }
    else{
        res.status(404).send("Producto no encontrado")
    }
})

export default routerProd;