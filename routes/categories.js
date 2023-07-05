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

export { categoriesRoutes };
