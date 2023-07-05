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

export { productsRouter };
