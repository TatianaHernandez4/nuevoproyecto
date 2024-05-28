import express from "express";
import {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Obtener todos los productos
router.get("/", getProducts);

// Obtener un producto por su ID
router.get("/:id", getProductById);

// Crear un nuevo producto
router.post("/", createProduct);

// Actualizar un producto (usando el método PATCH)
router.patch("/:id", updateProduct); 

// Eliminar un producto
router.delete("/:id", deleteProduct);

export default router;
