import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";
import db from "./database/db.js";

const app = express();
const port = process.env.PORT || 3000;

// Conexión a la base de datos
(async () => {
  try {
    await db.authenticate();
    db.sync(); // Crea las tablas en la base de datos si no existen
    console.log("La conexión a la base de datos se ha establecido correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error.message);
  }
})();

// Middlewares
app.use(express.json()); // Permite el envío y recepción de información en formato JSON
app.use(cors()); // Permite el consumo de la API desde otros puertos diferentes al PORT
app.use(express.static("public")); // Contenedor de archivos estáticos - carpeta pública

// Rutas
app.use("/products", productRouter); // Usar las rutas definidas en productRouter para gestionar los productos

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
