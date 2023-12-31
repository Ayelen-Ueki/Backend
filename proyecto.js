const fs = require('fs');
const path = require('path');

class ProductManager {
  static contadorIds = 0;

  constructor() {
    this.products = [];
    this.filePath = path.join(__dirname, 'productos.json');
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    this.validateProductData(title, description, price, thumbnail, code, stock);

    const id = ProductManager.contadorIds++;
    
    if (!this.isProductExists(id)) {
      const newProduct = { id, title, description, price, thumbnail, code, stock };
      this.products.push(newProduct);
      this.saveProductsToFile();
      return newProduct;
    } else {
      throw new Error(`Ya existe un producto con el identificador ${id}.`);
    }
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      throw new Error(`Producto con el identificador ${id} no encontrado.`);
    }
  }

  saveProductsToFile() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
    console.log(`Productos guardados en ${this.filePath}`);
  }

  validateProductData(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son obligatorios.");
    }
  }

  isProductExists(id) {
    return this.products.some((p) => p.id === id);
  }
}

const product = new ProductManager();

try {
  const product1 = product.addProduct("Taza", "Taza de gatito", 5000, "Fotos/Taza_de_Gatito.jpeg", 1, 10);
} catch (error) {
  console.error(error.message);
}