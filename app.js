import express from 'express';
import cors from "cors";
import productRouter from "./routes/product.route.js";

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); 
app.use(express.static("public"));

//http://localhost:3000/products
// app.get("/products", (req, res) => {
//     res.json({
//         success: true,
//         data:[
//             {
//                 subject: "programacion v",
//                 semester: "7",
//                 date: new Date().toDateString(),
//             },
//         ],
//     });
// });

app.use("/products",productRouter);

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});