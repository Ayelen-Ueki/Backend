import { Router } from "express";
import uuid4 from "uuid4";

import { Router } from "express";

const routerProd = Router();

// ... (existing routes)

// Actualizar un producto por ID
routerProd.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Validar que el ID sea un UUID válido
        if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const existingProduct = await productManager.getProductById(id);

        // Verificar si el producto existe
        if (!existingProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        // Actualizar los campos del producto con los proporcionados en el cuerpo de la solicitud
        const updatedProduct = {
            id,
            title: req.body.title || existingProduct.title,
            description: req.body.description || existingProduct.description,
            code: req.body.code || existingProduct.code,
            price: req.body.price || existingProduct.price,
            status: existingProduct.status, // Mantener el estado actual
            stock: req.body.stock || existingProduct.stock,
            category: req.body.category || existingProduct.category,
            thumbnail: req.body.thumbnail || existingProduct.thumbnail,
        };

        // Actualizar el producto
        const confirmation = await productManager.updateProduct(id, updatedProduct);

        if (confirmation) {
            res.status(200).json({ message: "Producto actualizado correctamente", data: updatedProduct });
        } else {
            res.status(404).json({ error: "Producto no encontrado" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Error al actualizar el producto por ID" });
    }
});

export default routerProd;