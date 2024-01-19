import {promises as fs} from 'fs';
import crypto from 'crypto';
import { stringify } from 'querystring';

export class ProductManager {
    contructor(path){
        this.products = []
        this.path = path
    }
async getProducts() {
    const prods = JSON.parse(await fs.readFile(this.path, 'utf-8 '))
  }
async getProductsById(id){
    const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const prod = prods.find(producto => producto.id === id)
    return prod
}
async addProduct(prod){
    const prods = JSON.parse(await fs.readFile(this.path, 'utf-8'))
    const existProd = prods.find(producto => producto.id === prod.id)
    if(existProd){
        return false
    }
    prod.id = crypto.randomBytes(16).toString('hex')
    prods.push(prod)
    await fs.writeFile(this.path, JSON.stringify(prods))
    return true
}
async updateProduct(id, prod) {
    const prods =  JSON.parse(await  fs.readFile(this.path, 'utf-8'))
    const prod = prods.find(producto => producto.id === id)
    prod. title = producto.title 
    prod.description = producto.description 
    prod. price = producto.price
    prod.stock = producto.stock
    prod.thumbnail = producto.thumbnail
    prods.push(prod)
    await fs.writeFile(this.path, JSON.stringify(prods))
    return true
}
async deleteProduct(id) {
    const prods = JSON (await fs.writeFile(this.path, 'utf-8'))
    const prod = prods.find (producto => producto.id === id)

    if(prod){
        prods.filter (producto => producto.id !== id)
        return true
    }
    else{
        return false
    }
}

}

