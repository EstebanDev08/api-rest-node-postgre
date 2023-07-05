import express from "express";
import { faker } from "@faker-js/faker";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("holi");
});

app.get("/new", (req, res) => {
  res.send("hello, i'm new endpoint");
});

app.get("/json", (req, res) => {
  res.json({
    name: "esteban",
    cc: "1004717275",
    tel: "312382981",
  });
});

app.get("/products", (req, res) => {
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
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: "telephone",
    price: 300,
    category: "tech",
  });
});

// asi podemos utilizar diferentes parametros
app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

//asi podemos trabajar con query params
app.get("/users", (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("no params");
  }
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
