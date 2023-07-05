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

export { usersRoutes };
