import boom from "boom";

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers["api"];

  if (apiKey === "123") {
    next();
  } else {
    res.status(401).json({
      error: "Unauthorized",
    });
  }
};

export { checkApiKey };
