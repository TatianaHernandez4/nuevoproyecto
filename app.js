import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";
import db from "./database/db.js";
// import db from "./database/db.js";

const app = express();
const port = process.env.PORT || 3000;

// bd conection
(async () => {
  try {
    await db.authenticate();
    db.sync(); // crea las tablas en la db ( si no existen )
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
})();

// midellewares
app.use(express.json()); // envio-recepción de información en formato tipo json
app.use(cors()); // consumo de API desde otros puertos diferentes al PORT
app.use(express.static("public")); // contenedor de archivos estaticos - carpeta publica
// http://localhost:3000

// endpoints

// forma larga
// http://localhost:3000/products
// app.get("/products", (req, res) => {
//   // res.send("Hello World!");
//   res.status(200).json({
//     success: true,
//     data: [
//       {
//         subject: "programación v",
//         description: "this is my first api",
//         hour: "20:00pm",
//         semester: "7",
//         date: new Date().toDateString(),
//       },
//     ],
//   });
// });

// forma corta
app.use("/products", productRouter);

// levantar aplicación
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});