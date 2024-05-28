import Product from "../models/product.model.js";

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const productsList = await Product.findAll();
        res.status(200).json({
            success: true,
            data: productsList,
        });
    } catch (error) {
        console.error("Error al obtener los productos:", error.message);
        res.status(500).json({
            success: false,
            error: "Error al obtener los productos",
        });
    }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    const { name, category, price } = req.body;
    try {
        const newProduct = await Product.create({
            name,
            category,
            price,
        });
        res.status(201).json({
            success: true,
            data: newProduct,
        });
    } catch (error) {
        console.error("Error al crear un nuevo producto:", error.message);
        res.status(500).json({
            success: false,
            error: "Error al crear un nuevo producto",
        });
    }
};

// Obtener un producto por su ID
export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                error: "Producto no encontrado",
            });
        }
        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (error) {
        console.error("Error al obtener el producto por su ID:", error.message);
        res.status(500).json({
            success: false,
            error: "Error al obtener el producto por su ID",
        });
    }
};

// Actualizar un producto existente
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, category, price } = req.body;

  try {
      const updatedProduct = await Product.update(
          { name, category, price },
          { where: { id: productId } }
      );

      if (updatedProduct[0] === 1) {
          // Actualización exitosa
          res.status(200).json({
              success: true,
              message: 'Producto actualizado correctamente'
          });
      } else {
          // Producto no encontrado o no actualizado
          res.status(404).json({
              success: false,
              message: 'Producto no encontrado'
          });
      }
  } catch (error) {
      // Error en la actualización
      console.error('Error al actualizar el producto:', error);
      res.status(500).json({
          success: false,
          message: 'Error interno del servidor'
      });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                error: "Producto no encontrado",
            });
        }
        await product.destroy();
        res.status(200).json({
            success: true,
            data: {},
        });
    } catch (error) {
        console.error("Error al eliminar el producto:", error.message);
        res.status(500).json({
            success: false,
            error: "Error al eliminar el producto",
        });
    }
};
