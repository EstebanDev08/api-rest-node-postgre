import express from "express";
import { ProductService } from "../services/product.service.js";

const productsRouter = express.Router();

const service = new ProductService();

productsRouter.get("/", (req, res) => {
  const products = service.find();

  res.json(products);
});

//para recibir parametros por link se utiliza los dos puntos /:id
productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  const product = service.findOne(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      message: "no found product",
    });
  }
});

productsRouter.post("/", (req, res) => {
  const body = req.body;

  //status nos permite devolver un code de status
  res.status(201).json({
    message: "creaded new product",
    data: body,
  });
});

//actualizar data
productsRouter.patch("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: "update product",
    data: body,
    id,
  });
});

//eliminar data
productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: "product deleted",
    id,
  });
});

export { productsRouter };
