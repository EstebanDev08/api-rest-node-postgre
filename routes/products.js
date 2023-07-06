import express from "express";
import { ProductsService } from "../services/products.service.js";

const productsRouter = express.Router();

//traemos la clase de nuestro producto
const service = new ProductsService();

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
      message: "not found product",
    });
  }
});

productsRouter.post("/", (req, res) => {
  const body = req.body;

  const [isSave, saveProduct] = service.create(body);

  //status nos permite devolver un code de status

  if (isSave === true) {
    res.status(201).json({
      message: "creaded new product",
      data: saveProduct,
    });
  } else {
    res.status(400).json({
      message: `${isSave}`,
    });
  }
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

  const isDeleted = service.delete(id);

  if (isDeleted === true) {
    res.status(204).json({});
  } else {
    res.status(400).json({
      message: isDeleted.toString(),
    });
  }
});

export { productsRouter };
