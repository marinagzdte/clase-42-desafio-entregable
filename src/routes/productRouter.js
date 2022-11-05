import { Router } from 'express';
import logger from '../utils/logger.js';
import { getAllProducts, getProductById, updateProductById, deleteProductById, addProduct } from "../controllers/productController.js";

const productRouter = new Router();

productRouter.get("/", logger.logReqInfo, getAllProducts);
productRouter.get("/:id", logger.logReqInfo, getProductById);
productRouter.put("/:id", logger.logReqInfo, updateProductById);
productRouter.delete("/:id", logger.logReqInfo, deleteProductById);
productRouter.post("/add", logger.logReqInfo, addProduct);

export default productRouter;