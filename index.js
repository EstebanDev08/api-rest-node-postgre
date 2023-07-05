import express from "express";

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
  res.json([
    {
      name: "telephone",
      price: 300,
      tcaregory: "tech",
    },
    {
      name: "telephone",
      price: 300,
      tcaregory: "tech",
    },
    {
      name: "telephone",
      price: 300,
      tcaregory: "tech",
    },
  ]);
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

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
