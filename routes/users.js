import express from "express";

const usersRoutes = express.Router();

//asi podemos trabajar con query params

usersRoutes.get("/", (req, res) => {
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

usersRoutes.post("/", (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: "producto creado",
    data: body,
  });
});

usersRoutes.patch("/:id", (req, res) => {
  const body = req.body;

  const { id } = req.params;

  res.json({
    message: "product actualizado",
    data: body,
    id,
  });
});

usersRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: `se ha eliminado el producto ${id}`,
  });
});

export { usersRoutes };
