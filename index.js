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

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
