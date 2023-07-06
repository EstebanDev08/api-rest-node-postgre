import express from "express";

const categoriesRoutes = express.Router();

// asi podemos utilizar diferentes parametros
categoriesRoutes.get("/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

categoriesRoutes.patch("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: "preduct actualizado",
    data: body,
    id,
  });
});

categoriesRoutes.post("/", (req, res) => {
  const body = req.body;

  res.json({
    message: "preduct actualizado",
    data: body,
  });
});

categoriesRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: "preduct actualizado",
    id,
  });
});

export { categoriesRoutes };
