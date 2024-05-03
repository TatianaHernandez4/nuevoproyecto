import express from "express";
import { products } from "../controllers/product.controller.js";

const router = express.Router();

// router.get("/", (req, res) => {
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

router.get("/",products)
export default router;