import express from "express";
import { faker } from "@faker-js/faker";

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  const products = [];

  const { limit = 100 } = req.query;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(200, 200, "cat", true),
    });
  }

  res.json(products);
});

//para recibir parametros por link se utiliza los dos puntos /:id
productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: "telephone",
    price: 300,
    category: "tech",
  });
});

productsRouter.post("/", (req, res) => {
  const body = req.body;

  res.json({
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
